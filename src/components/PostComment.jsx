import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";
import { toast } from "react-toastify";


const PostComment = ({ articleId, onCommentPosted }) => {
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
    };

    try {
      setPosting(true);
      await axios.post(`http://localhost:3000/articles/${articleId}/comments`, newComment);
      setComment("");
      onCommentPosted(); 
    } catch (error) {
      console.error("Error posting comment:", error);
    } finally {
      setPosting(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="w-full border p-2 rounded mb-2"
        placeholder="Write a comment..."
        rows="3"
      ></textarea>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={posting || !comment.trim()}
      >
        {posting ? "Posting..." : "Post Comment"}
      </button>
    </form>
  );
};

export default PostComment;
