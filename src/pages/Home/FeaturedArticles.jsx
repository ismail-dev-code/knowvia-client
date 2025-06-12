import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../Shared/Loading";
import { motion } from "framer-motion";

const FeaturedArticles = () => {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("https://knowvia-server.vercel.app/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        const articles = res.data;
        const sorted = articles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setFeaturedArticles(sorted);
      } catch (error) {
        console.error("Error fetching featured articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedArticles();
  }, []);

  if (loading)
    return (
      <div className="text-center">
        <Loading />
      </div>
    );

  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 50 },
  };

  const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-6 pb-12"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h2 className="text-2xl font-bold text-center pb-2">Featured Articles</h2>
      <p className="text-center mx-auto max-w-xl mb-8 text-gray-400">
        Stay ahead with our top six featured articles—covering the most
        talked-about topics, latest trends, and must-read stories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredArticles.map((article, index) => (
          <motion.div
            key={article._id}
            className="p-4 rounded-xl shadow-xl transition flex flex-col justify-between h-full min-h-[400px]"
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded mb-3"
            >
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
            </motion.div>
            <h3 className="text-xl font-semibold mb-1 capitalize">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">
              By{" "}
              <span className="font-medium capitalize">{article.username}</span>
            </p>
            <p className="text-xs text-gray-400 mb-2">
              Published on: {article.date}
            </p>
            <p className="text-gray-700 mb-3">
              {article.content.length > 100
                ? `${article.content.slice(0, 100)}...`
                : article.content}
            </p>
            <Link to={`/articles/${article._id}`}>
              <motion.button
                className="btn btn-secondary hover:border-none"
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
    </motion.div>
  );
};

export default FeaturedArticles;
