import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Loading from "../pages/Shared/Loading";

const CategoryArticles = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Fetch category-specific articles
  useEffect(() => {
    const fetchCategoryArticles = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const { data } = await axios.get(
          `https://knowvia-server.vercel.app/articles?category=${category}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );

        setArticles(data);
      } catch (error) {
        console.error(
          `Error fetching articles for category "${category}":`,
          error
        );
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryArticles();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Knowvia | {category} Articles</title>
      </Helmet>

      <div className="max-w-6xl mx-auto px-4 py-8 mb-24 md:mb-64">
        <h2 className="text-xl md:text-3xl font-bold mb-6 capitalize">
          Articles in “{category}”
        </h2>

        {articles.length === 0 ? (
          <p className="text-center">No articles found in this category.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <div
                key={article._id}
                className="p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col justify-between h-full"
              >
                <div>
                  {/* Image hover animation */}
                  <motion.div
                    className="mb-3 overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={article.thumbnail || "/placeholder.jpg"}
                      alt={article.title || "Article thumbnail"}
                      className="w-full h-40 object-cover"
                    />
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-1 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm font-medium capitalize mb-1">
                    By {article.username || "Unknown"}
                  </p>
                  <p className="text-xs text-gray-500 mb-2">
                    Published on:{" "}
                    {article.date
                      ? new Date(article.date).toLocaleDateString()
                      : "N/A"}
                  </p>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {article.content?.slice(0, 100) || "No content available"}
                    ...
                  </p>
                </div>

                <div className="mt-auto">
                  <Link to={`/articles/${article._id}`} className="mt-auto">
                    <motion.button
                      className="btn btn-secondary btn-sm hover:border-none"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#2563eb",
                        color: "#fff",
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Read More
                    </motion.button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryArticles;
