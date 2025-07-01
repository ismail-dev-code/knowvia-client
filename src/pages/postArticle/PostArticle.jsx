import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";
import useImageUploader from "../../hooks/useImageUploader";

const PostArticle = () => {
  const { user } = useContext(AuthContext);
  const { uploadImage, uploading } = useImageUploader();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    tags: "",
    thumbnail: "",
    userPhoto: "",
    userEmail: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const article = {
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
      userEmail: user.email,
      username: user.displayName,
      userPhoto: user.photoURL,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://knowvia-server.vercel.app/articles",
        article,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );

      if (response.status === 201 || response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Article posted successfully.",
        });
        setFormData({
          title: "",
          content: "",
          category: "",
          tags: "",
          thumbnail: "",
          userPhoto: "",
          userEmail: "",
          date: new Date().toISOString().split("T")[0],
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Could not post article.",
        });
      }
    } catch (error) {
      console.error("Axios error:", error);
      Swal.fire({
        icon: "error",
        title: "Unauthorized",
        text: "You must be authenticated to perform this action.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Knowvia | Post Article</title>
      </Helmet>

      <div className="max-w-2xl mx-auto p-4 md:mb-32 my-10">
        <h2 className="text-2xl font-bold mb-6 text-center text-primary">
          Post a New Article
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-primary">
          {/* Title */}
          <div>
            <label htmlFor="title" className="block mb-1 font-medium">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Article title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block mb-1 font-medium">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Write your article here..."
              value={formData.content}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded h-32 resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block mb-1 font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded"
            >
              <option value="">Select Category</option>
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

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block mb-1 font-medium">
              Tags (comma separated)
            </label>
            <input
              id="tags"
              type="text"
              name="tags"
              placeholder="e.g. education, empowerment, social development"
              value={formData.tags}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Thumbnail Upload */}
          <p className="mb-1 font-medium overflow-hidden">Thumbnail Image</p>
          <div className="flex flex-row ">
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-nowrap inline-block px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 hover:bg-gray-700 -mp-4"
            >
              Choose File
            </label>
            <input
            required
              id="file-upload"
              type="file"
              className="px-4 w-full py-2 border border-l-0 cursor-pointer"
              onChange={async (e) => {
                const url = await uploadImage(e.target.files[0]);
                if (url) setFormData({ ...formData, thumbnail: url });
              }}
            />
            {uploading && (
              <p className="text-sm text-orange-500 mt-1">Uploading...</p>
            )}
          </div>
          {formData.thumbnail && (
            <img
              src={formData.thumbnail}
              alt="Thumbnail preview"
              className="w-32 h-20 object-cover rounded mt-2 border"
            />
          )}

          {/* Author Info (disabled) */}
          <div className="text-xs space-y-2 flex-col md:flex-row flex">
            <div>
              <label htmlFor="username" className="block mb-1 font-medium">
                Your Name
              </label>
              <input
                id="username"
                name="username"
                value={user?.displayName}
                disabled
              />
            </div>

            <div>
              <label htmlFor="userEmail" className="block mb-1 font-medium">
                Your Email
              </label>
              <input
                id="userEmail"
                name="userEmail"
                value={user?.email}
                disabled
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="block mb-1 font-medium">
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-secondary cursor-pointer transition"
            >
              Submit Article
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostArticle;
