import React from "react";

const Comment = ({ comment }) => {
  const formattedDate = new Date(comment.created_at).toLocaleString();

  return (
    <div className="shadow rounded p-3 mb-3">
      <div className="flex items-center mb-2">
        <img
          src={comment.user_photo}
          alt={comment.user_name}
          className="w-8 h-8 rounded-full mr-2"
        />
        <div>
          <strong className="capitalize">{comment.user_name}</strong>
          <p className="text-xs text-gray-500">{formattedDate}</p>
        </div>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
};

export default Comment;
