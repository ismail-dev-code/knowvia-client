import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router";
import { motion } from "framer-motion";
import Loading from "../pages/Shared/Loading";

const CategoryArticles = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryArticles = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/articles`);
        const filtered = res.data.filter(
          (article) => article.category.toLowerCase() === category.toLowerCase()
        );
        setArticles(filtered);
      } catch (err) {
        console.error("Failed to fetch category articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryArticles();
  }, [category]);

  if (loading) return <div className="text-center py-8"><Loading/></div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 capitalize">
        Articles in "{category}"
      </h2>

      {articles.length === 0 ? (
        <p className="text-center">No articles found in this category.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article._id}
              className="p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between h-full"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-3 overflow-hidden rounded"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                  />
                </motion.div>

                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-gray-700 font-medium capitalize">
                  by {article.username}
                </p>
                <p className="text-sm text-gray-600 mb-2">Published on: {article.date}</p>
                <p className="text-sm text-gray-700 mb-4">
                  {article.content.slice(0, 100)}...
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  to={`/articles/${article._id}`}
                  className="text-blue-500 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryArticles;
