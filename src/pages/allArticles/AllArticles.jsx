import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../Shared/Loading";
import { motion } from "framer-motion";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("");

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

        setArticles(res.data);
      } catch (err) {
        console.error("Error fetching articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

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
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">All Articles</h2>

      <div className="flex justify-center mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
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
      </div>

      {articles.length === 0 ? (
        <p className="text-center my-24">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article._id}
              className="p-4 rounded-xl shadow-2xl transition flex flex-col justify-between h-full min-h-[420px]"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded mb-3"
                >
                  <img
                    src={article.thumbnail}
                    alt={article.title}
                    className="w-full h-40 object-cover transition-transform duration-300"
                  />
                </motion.div>

                <h3 className="text-xl font-semibold mb-1 capitalize">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">
                  By{" "}
                  <span className="font-medium capitalize">
                    {article?.username || article?.photoURL}
                  </span>
                </p>
                <p className="text-xs text-gray-400 mb-2">
                  Published on: {article.date}
                </p>
                <p className="text-gray-700 mb-3">
                  {article.content.length > 100
                    ? `${article.content.slice(0, 100)}...`
                    : article.content}
                </p>
              </div>

              <div className="mt-auto">
                <Link to={`/articles/${article._id}`}>
                  <motion.button
                    className="btn btn-secondary"
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
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArticles;
