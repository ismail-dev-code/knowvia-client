import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";
import { Helmet } from "react-helmet";

const PostArticle = () => {
  const { user } = useContext(AuthContext);
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
        "http://localhost:3000/articles",
        article,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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
      <div className="max-w-xl mx-auto p-4 md:mb-32 my-10">
        <h2 className="text-2xl font-bold mb-4">Post Article</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-primary">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <textarea
            name="content"
            placeholder="Write an article"
            value={formData.content}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded h-32 whitespace-normal break-words text-base leading-relaxed"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded cursor-pointer"
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
          <input
            type="text"
            name="tags"
            placeholder="Tags (comma separated)"
            value={formData.tags}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="url"
            name="thumbnail"
            placeholder="Image URL"
            value={formData.thumbnail}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />

          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 font-medium">
              Your Name
            </label>
            <input
              id="username"
              name="username"
              value={user?.displayName}
              onChange={handleChange}
              disabled
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userEmail" className="block mb-1 font-medium">
              Your Email
            </label>
            <input
              id="userEmail"
              name="userEmail"
              value={user?.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block mb-1 font-medium">
              Publication Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              disabled
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Submit Article
          </button>
        </form>
      </div>
    </>
  );
};

export default PostArticle;
