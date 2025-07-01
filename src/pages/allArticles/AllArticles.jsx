import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../Shared/Loading";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const url = category
          ? `http://localhost:3000/articles?category=${category}`
          : "http://localhost:3000/articles";

        const token = localStorage.getItem("token");

        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        let sortedArticles = res.data;

        if (sort === "latest") {
          sortedArticles = sortedArticles.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
        } else if (sort === "oldest") {
          sortedArticles = sortedArticles.sort(
            (a, b) => new Date(a.date) - new Date(b.date)
          );
        } else if (sort === "az") {
          sortedArticles = sortedArticles.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        } else if (sort === "za") {
          sortedArticles = sortedArticles.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        }

        setArticles(sortedArticles);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, sort]);

  if (loading)
    return (
      <div className="text-center">
        <Loading />
      </div>
    );

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <>
      <Helmet>
        <title>Knowvia | All Articles</title>
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 mb-18 md:mb-32">
        <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full max-w-xs cursor-pointer"
          >
            <option value="">All Categories</option>
            <option value="tech">Tech</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="business">Business</option>
            <option value="environment">Environment</option>
            <option value="science">Science</option>
            <option value="arts">Arts</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered w-full max-w-xs cursor-pointer"
          >
            <option value="latest">Sort by: Latest</option>
            <option value="oldest">Sort by: Oldest</option>
            <option value="az">Sort by: Title A-Z</option>
            <option value="za">Sort by: Title Z-A</option>
          </select>
        </div>

        {articles.length === 0 ? (
          <p className="text-center my-24">No articles found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <motion.div
                key={article._id}
                className="bg-white p-5 rounded-2xl shadow-md transition-all duration-300 flex flex-col justify-between h-full min-h-[420px]"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="overflow-hidden rounded-xl mb-2"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-40 object-cover rounded-xl transition-transform duration-300"
                  />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold leading-snug capitalize text-gray-800">
                    {article.title.split(" ").length > 12
                      ? `${article.title.split(" ").slice(0, 12).join(" ")}...`
                      : article.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-0.5">
                    By{" "}
                    <span className="font-medium capitalize text-gray-700">
                      {article?.username || article?.photoURL}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mb-1">
                    Published on: {article.date}
                  </p>

                  <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                    {article.content.length > 100
                      ? `${article.content.slice(0, 60)}...`
                      : article.content}
                  </p>
                </div>

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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllArticles;
