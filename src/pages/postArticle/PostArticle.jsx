import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext/AuthContext";
import axios from "axios";

const PostArticle = () => {
  const { user } = useContext(AuthContext);
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
      const response = await axios.post(
        "http://localhost:3000/articles",
        article
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
        title: "Error",
        text: "Something went wrong.",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 md:mb-32 my-10">
      <h2 className="text-2xl font-bold mb-4">Post Article</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full border p-2 rounded h-32"
        />
        <select
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
        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="thumbnail"
          placeholder="Image URL"
          value={formData.thumbnail}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="username"
          value={user?.displayName}
          onChange={handleChange}
          disabled
          className="w-full border p-2 rounded"
        />
        <input
          name="userEmail"
          value={user?.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          disabled
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          disabled
        />
        <button
          type="submit"
          className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Submit Article
        </button>
      </form>
    </div>
  );
};

export default PostArticle;
