import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
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
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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

  useEffect(() => {
    if (!article) return;
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 200);
    }
  }, [article]);

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
      <div className="text-center">
        <Loading />
      </div>
    );
  }

  if (!article) {
    return <p className="text-center my-22">Article not found.</p>;
  }

  return (
    <>
      <Helmet>
        <title>Knowvia | Article Details</title>
      </Helmet>

      <div className="max-w-3xl mx-auto p-6">
        <img
          src={article.thumbnail}
          alt={article.title}
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 capitalize">{article.title}</h1>
        <p className="text-sm text-gray-600 mb-4">
          By{" "}
          <span className="font-medium capitalize">
            {article.username || user?.displayName}
          </span>
          {user?.photoURL && (
            <img
              src={article.userPhoto}
              alt={article.username}
              className="inline-block w-6 h-6 rounded-full ml-2"
            />
          )}
          {" | "}
          {article.category} | {article.date}
        </p>

        <div className="leading-relaxed mb-4 whitespace-pre-line">
          {article.content}
        </div>

        <div className="text-sm text-gray-500 mb-6">
          <strong>Tags:</strong> {article.tags?.join(", ")}
        </div>

        <div className="mb-4">
          <p>Likes: {likeCount}</p>
          <button
            onClick={handleLike}
            className="btn btn-secondary flex items-center gap-1"
          >
            <AiOutlineLike size={22} /> {liked ? "Liked" : "Like"}
          </button>
        </div>
        <div id="comments">
          <CommentsSection articleId={article._id} />
        </div>
      </div>
    </>
  );
};

export default SingleArticle;
