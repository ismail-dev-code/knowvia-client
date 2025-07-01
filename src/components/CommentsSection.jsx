import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/authContext/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Comment = ({ comment, articleId, onCommentPosted }) => {
  const { user } = useContext(AuthContext);
  const [showReply, setShowReply] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReplySubmit = async () => {
    if (!user) {
      toast.info("Please log in first.");
      return;
    }

    if (!replyText.trim()) return;

    try {
      await axios.post(`https://knowvia-server.vercel.app/articles/${articleId}/comments`, {
        user_id: user.id,
        user_name: user.displayName,
        user_photo: user.photoURL,
        comment: replyText,
        parent_id: comment._id,
      });

      setReplyText("");
      setShowReply(false);
      onCommentPosted();
    } catch (error) {
      console.error("Failed to submit reply:", error);
    }
  };

  return (
    <div className="mb-4 pl-4 border-l-2 rounded-l-2xl border-gray-300">
      <div className="flex items-center mb-1">
        {comment.user_photo && (
          <img
            src={comment.user_photo}
            alt={comment.user_name}
            className="w-8 h-8 rounded-full mr-2"
          />
        )}
       
        <strong className="capitalize text-nowrap">{comment.user_name}</strong>
        
      </div>
        
      <p className="mb-2">{comment.comment}</p>
<small className="text-gray-500 ml-2 text-xs text-nowrap">
  Date: {new Date(comment.created_at).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  })}
</small>
<br />
      <button
        className="text-sm cursor-pointer text-blue-600 hover:underline mb-2"
        onClick={() => {
          if (!user) {
            toast.info("Please log in first.");
            return;
          }
          setShowReply((prev) => !prev);
        }}
      >
        {showReply ? "Cancel" : "Reply"}
      </button>

      {showReply && (
        <div className="mb-2">
          <textarea
            rows={3}
            className="w-full border rounded p-2"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder={user ? "Write your reply..." : "Please log in to reply"}
            disabled={!user}
          />
          <button
            onClick={handleReplySubmit}
            className="mt-1 btn btn-primary"
            disabled={!user}
          >
            Reply
          </button>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-6 mt-2">
          {comment.replies.map((reply) => (
            <Comment
              key={reply._id}
              comment={reply}
              articleId={articleId}
              onCommentPosted={onCommentPosted}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const PostComment = ({ articleId, onCommentPosted }) => {
  const { user } = useContext(AuthContext);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async () => {
    if (!user) {
      toast.info("Please log in first.");
      return;
    }
    if (!commentText.trim()) return;

    try {
      await axios.post(`https://knowvia-server.vercel.app/articles/${articleId}/comments`, {
        user_id: user.id,
        user_name: user.displayName,
        user_photo: user.photoURL,
        comment: commentText,
        parent_id: null,
      });
      setCommentText("");
      onCommentPosted();
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <div className="mb-4">
      <textarea
        rows={3}
        className="w-full border rounded p-2"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder={user ? "Write a comment..." : "Please log in to comment"}
        disabled={!user}
      />
      <button
        onClick={handleSubmit}
        className="mt-1 btn btn-primary"
        disabled={!user}
      >
        Post Comment
      </button>
    </div>
  );
};

const CommentsSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const res = await axios.get(`https://knowvia-server.vercel.app/comments/${articleId}`);
      setComments(res.data);
    } catch (error) {
      console.error("Failed to load comments", error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [articleId]);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Comments</h2>

      <PostComment articleId={articleId} onCommentPosted={fetchComments} />

      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">No comments yet.</p>
      ) : (
        comments.map((comment) => (
          <Comment
            key={comment._id}
            comment={comment}
            articleId={articleId}
            onCommentPosted={fetchComments}
          />
        ))
      )}
    </div>
  );
};

export default CommentsSection;
