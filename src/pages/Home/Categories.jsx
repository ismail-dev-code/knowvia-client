import { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:3000/articles", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        const allCategories = res.data.map((article) =>
          article.category.trim().toLowerCase()
        );
        const uniqueCategories = [...new Set(allCategories)];
        const shuffled = uniqueCategories.sort(() => 0.5 - Math.random());
        setCategories(shuffled);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const formatCategory = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div className="relative max-w-4xl mx-auto px-4 pt-12 mb-12 overflow-hidden rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-2">
        Explore Our Categories
      </h2>
      <p className="text-center text-gray-500 mb-5">
        Browse through different categories to find articles that match your
        interests.
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 6 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category}>
            <Link
              to={`/articles/category/${category}`}
              className="block bg-white hover:bg-blue-100 text-blue-800 font-medium py-2 px-4 rounded text-center capitalize shadow-md transition-all duration-200"
            >
              {formatCategory(category)}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
