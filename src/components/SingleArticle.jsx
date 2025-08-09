import React, { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";
import Loading from "../pages/Shared/Loading";
import { toast } from "react-toastify";
import { AiOutlineLike } from "react-icons/ai";
import { Helmet } from "react-helmet";
import CommentsSection from "./CommentsSection";

const SingleArticle = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#comments") {
      const el = document.getElementById("comments");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.hash]);

  useEffect(() => {
    axios
      .get(`https://knowvia-server.vercel.app/articles/${id}`)
      .then((res) => {
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching article:", err);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (article) {
      const likedBy = article.likedBy || [];
      setLiked(likedBy.includes(user?.email));
      setLikeCount(likedBy.length);
    }
  }, [article, user]);

  const handleLike = () => {
    if (!user?.email) {
      return toast.error("Please log in first");
    }

    axios
      .patch(`https://knowvia-server.vercel.app/like/${id}`, {
        email: user?.email,
      })
      .then((res) => {
        const isLiked = res.data.liked;
        setLiked(isLiked);
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((err) => {
        console.error("Error updating like:", err);
      });
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <Loading />
      </div>
    );
  }

  if (!article) {
    return <p className="text-center my-10 text-lg text-gray-600">Article not found.</p>;
  }

  return (
    <>
      <Helmet>
        <title>Knowvia | Article Details</title>
      </Helmet>

      <div className="max-w-6xl mx-auto p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column - Image */}
          <div className="md:col-span-1">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold capitalize">{article.title}</h1>
            <p className="text-gray-600 text-sm">
              By{" "}
              <span className="font-medium capitalize">{article.username || user?.displayName}</span>
              {article.userPhoto && (
                <img
                  src={article.userPhoto}
                  alt={article.username}
                  className="inline-block w-6 h-6 rounded-full ml-2"
                />
              )}
              {" | "}
              {article.category} | {article.date}
            </p>

            <div className="prose prose-sm sm:prose lg:prose-lg max-w-none whitespace-pre-line">
              {article.content}
            </div>

            {article.tags && (
              <div className="text-sm text-gray-500">
                <strong>Tags:</strong> {article.tags.join(", ")}
              </div>
            )}

            <div className="flex items-center gap-3 mt-4">
              <button
            
                onClick={handleLike}
                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
              >
                <AiOutlineLike size={20} />
                {liked ? "Liked" : "Like"} <span className="text-white font-bold"> {likeCount}</span>
              </button>
              
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div id="comments" className="mt-10">
          <CommentsSection articleId={article._id} />
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
