import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Loading from "../Shared/Loading";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyArticles = () => {
  const { user } = useContext(AuthContext);
  const [myArticles, setMyArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, [user]);

  const fetchArticles = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return;
      }

      const response = await axios.get("https://knowvia-server.vercel.app/myArticles", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMyArticles(response.data);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "You must be authenticated to perform this action.",
        });
      }

      await axios.delete(`https://knowvia-server.vercel.app/articles/${deleteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMyArticles((prev) =>
        prev.filter((article) => article._id !== deleteId)
      );

      Swal.fire({
        icon: "success",
        title: "Deleted",
        text: "The article was deleted successfully.",
        confirmButtonColor: "#d33",
      });
    } catch (err) {
      console.error("Failed to delete article", err);
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
        text: err.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setShowDeleteModal(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found");
        return Swal.fire({
          icon: "error",
          title: "Unauthorized",
          text: "Authentication token missing.",
        });
      }
      const { _id, ...updatedArticle } = selectedArticle;

      await axios.patch(
        `https://knowvia-server.vercel.app/articles/${_id}`,
        updatedArticle,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchArticles();

      Swal.fire({
        icon: "success",
        title: "Article Updated",
        text: "The article was updated successfully!",
        confirmButtonColor: "#16a34a",
      });
    } catch (err) {
      console.error("Failed to update article", err);

      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          err.response?.data?.message ||
          "You must be authenticated to perform this action.",
      });
    } finally {
      setShowUpdateModal(false);
    }
  };

  const openUpdateModal = (article) => {
    setSelectedArticle(article);
    setShowUpdateModal(true);
  };

  const openDeleteModal = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  if (loading)
    return (
      <div className="text-center">
        <Loading />
      </div>
    );

  return (
    <>
      <Helmet>
        <title>Knowvia | My Articles</title>
      </Helmet>
      <div className="max-w-6xl mx-auto mt-10 mb-24 md:mb-64 p-4">
        <h2 className="text-2xl font-bold mb-6">My Articles</h2>
        {myArticles.length === 0 ? (
          <>
            <div className="text-center my-24 space-y-4">
              <p>You haven't posted any articles yet.</p>
              <Link to={"/postArticle"} className="btn btn-secondary">
                Post an Article
              </Link>
            </div>
          </>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="text-sm">
                <tr>
                  <th className="px-4 py-2 border text-nowrap">Serial No.</th>
                  <th className="px-4 py-2 border">Title</th>
                  <th className="px-4 py-2 border">Category</th>
                  <th className="px-4 py-2 border">Description</th>
                  <th className="px-4 py-2 border">Date</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody className="border">
                {myArticles.map((article, index) => (
                  <tr key={article._id} className="text-sm text-center">
                    <td className="border px-2 py-2">{index + 1}</td>
                    <td className="border px-2 py-2">{article.title}</td>
                    <td className="border px-2 py-2">{article.category}</td>
                    <td className="border px-2 py-2 text-left">
                      {article.content.length > 100
                        ? `${article.content.slice(0, 80)}...`
                        : article.content}
                    </td>
                    <td className="border px-2 py-2 text-nowrap">
                      {article.date}
                    </td>
                    <td className="md:border-b border-b-0 flex flex-col gap-0.5 py-2 items-center">
                      <button
                        onClick={() => openUpdateModal(article)}
                        className="text-blue-500 hover:text-blue-600 px-3 py-1 rounded"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={"Update Article"}
                        data-tooltip-place="top"
                        data-tooltip-class-name="z-50"
                      >
                        <FaEdit className="cursor-pointer" size={20} />
                      </button>
                      <button
                        onClick={() => openDeleteModal(article._id)}
                        className="text-red-500 hover:text-red-600 px-3 py-1 rounded"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={"Delete Article"}
                        data-tooltip-place="top"
                        data-tooltip-class-name="z-50"
                      >
                        <MdDelete className="cursor-pointer" size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showUpdateModal && selectedArticle && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-primary/10 backdrop-blur">
            <form
              onSubmit={handleUpdate}
              className="p-6 rounded bg-base-100 shadow-2xl max-w-lg w-full space-y-4"
            >
              <h3 className="text-xl font-bold mb-2">Update Article</h3>

              <input
                type="text"
                name="title"
                placeholder="Title"
                value={selectedArticle.title}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    title: e.target.value,
                  })
                }
                required
                className="w-full border p-2 rounded"
              />

              <textarea
                name="content"
                placeholder="Content"
                value={selectedArticle.content}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    content: e.target.value,
                  })
                }
                required
                className="w-full border p-2 rounded h-32 whitespace-normal break-words text-base leading-relaxed"
              />

              <select
                name="category"
                value={selectedArticle.category}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    category: e.target.value,
                  })
                }
                required
                className="w-full border p-2 rounded text-gray-500 cursor-pointer"
              >
                <option value="">Select Category</option>
                <option value="Tech">Tech</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
                <option value="Environment">Environment</option>
                <option value="Science">Science</option>
                <option value="Arts">Arts</option>
              </select>

              <input
                type="text"
                name="tags"
                placeholder="Tags (comma separated)"
                value={selectedArticle.tags?.join(", ") || ""}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    tags: e.target.value.split(",").map((tag) => tag.trim()),
                  })
                }
                className="w-full border p-2 rounded"
              />

              <input
                type="url"
                name="thumbnail"
                placeholder="Image URL"
                value={selectedArticle.thumbnail || ""}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    thumbnail: e.target.value,
                  })
                }
                required
                className="w-full border p-2 rounded"
              />

              <input
                type="date"
                name="date"
                value={selectedArticle.date}
                onChange={(e) =>
                  setSelectedArticle({
                    ...selectedArticle,
                    date: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
                disabled
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="px-4 py-2 border rounded cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}

        {showDeleteModal && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20 backdrop-blur">
            <div className="bg-base-100 p-6 rounded shadow max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
              <p className="mb-4">
                Are you sure you want to delete this article?
              </p>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-3 py-1 border cursor-pointer rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-600 cursor-pointer text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyArticles;
