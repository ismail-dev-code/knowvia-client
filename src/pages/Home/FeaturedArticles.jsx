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

        const res = await axios.get("http://localhost:3000/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        const articles = res.data;
        const sorted = articles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 8);
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
        Stay ahead with our top eight featured articles—covering the most
        talked-about topics, latest trends, and must-read stories.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {featuredArticles.map((article, index) => (
    <motion.div
      key={article._id}
      className="bg-white p-5 rounded-2xl shadow-md  transition-all duration-300 flex flex-col justify-between h-full min-h-[420px]"
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
          By <span className="font-medium capitalize text-gray-700">{article.username}</span>
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
    </motion.div>
  );
};

export default FeaturedArticles;


  