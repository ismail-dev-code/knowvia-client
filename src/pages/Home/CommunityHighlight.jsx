import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CommunityHighlight = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get("https://knowvia-server.vercel.app/comments/recent");
        setComments(res.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto rounded my-12">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Community Highlights
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 4000 }}
      >
        {comments.slice(0, 8).map((comment) => (
          <SwiperSlide key={comment._id}>
            <div className="bg-white p-4 rounded-2xl h-48 flex flex-col justify-between shadow hover:shadow-md transition-all">
              <p className="italic text-gray-700 mb-2 line-clamp-3">
                "{comment.comment}"
              </p>
              <p className="text-sm text-gray-500 text-right capitalize mt-auto">
                — {comment.user_name}
              </p>
              {comment.articleId && (
                <Link
                  to={`/articles/${comment.articleId}#comments`}
                  className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                >
                  Join the conversation
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunityHighlight;
