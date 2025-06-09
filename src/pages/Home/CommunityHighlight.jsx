import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const CommunityHighlight = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("http://localhost:3000/comments/recent");
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto rounded my-12">
      <h2 className="text-2xl font-bold mb-4">Community Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {comments.slice(0, 4).map((comment) => (
          <div
            key={comment._id}
            className="bg-white p-4
             hover:border-l-1 hover:border-primary rounded-2xl w-full h-48 flex flex-col justify-between"
          >
            <p className="italic text-gray-700 mb-2 line-clamp-3">
              "{comment.comment}"
            </p>
            <p className="text-sm text-gray-500 text-right capitalize mt-auto">
              — {comment.user_name}
            </p>
            {comment.articleId && (
              <Link
                to={`/articles/${comment.articleId}`}
                className="text-blue-600 text-sm mt-2 inline-block hover:underline"
              >
                Join the conversation
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityHighlight;
