import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";
import { toast } from "react-toastify";

const PostComment = ({ articleId, onCommentPosted, parentId = null }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [posting, setPosting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim() || !user) return toast.error("Please log in first");

    const newComment = {
      user_id: user?.uid,
      user_name: user?.displayName,
      user_photo: user?.photoURL,
      comment,
      parent_id: parentId,
    };

    try {
      setPosting(true);
      await axios.post(`http://localhost:3000/articles/${articleId}/comments`, newComment);
      setComment("");
      onCommentPosted();
    } catch (error) {
      console.error("Error posting comment:", error);
      toast.error("Failed to post comment");
    } finally {
      setPosting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-2 rounded mb-1 text-sm"
        placeholder={parentId ? "Write a reply..." : "Write a comment..."}
        rows="2"
      ></textarea>
      <button
        type="submit"
        className="btn btn-sm btn-primary"
        disabled={posting || !comment.trim()}
      >
        {posting ? "Posting..." : parentId ? "Reply" : "Post Comment"}
      </button>
    </form>
  );
};

export default PostComment;
