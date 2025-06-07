import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/articles");
        const allCategories = res.data.map((article) => article.category);
        const uniqueCategories = [...new Set(allCategories)];
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold text-center mb-2">
        Explore Categories
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Browse through different categories to find articles that match your
        interests.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/articles/category/${category}`}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded text-center capitalize"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
