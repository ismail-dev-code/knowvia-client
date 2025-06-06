import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import bgImage from "../assets/sliderImg/bg-banner.avif";
import slider1 from "../assets/sliderImg/slider1.jpg";
import slider2 from "../assets/sliderImg/slider2.jpg";
import slider3 from "../assets/sliderImg/slider3.jpg";
import slider4 from "../assets/sliderImg/slider4.jpeg";
import slider5 from "../assets/sliderImg/slider5.jpg";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();

  const banners = [
    {
      id: 1,
      title: "Inspire Through Writing",
      desc: "Your words can shape the future.",
      img: slider1,
    },
    {
      id: 2,
      title: "Learn Something New",
      desc: "Dive into a world of knowledge.",
      img: slider2,
    },
    {
      id: 3,
      title: "Share Your Insights",
      desc: "Publish articles and share your wisdom.",
      img: slider3,
    },
    {
      id: 4,
      title: "Explore Ideas",
      desc: "Read what others are discovering.",
      img: slider4,
    },
    {
      id: 5,
      title: "Join the Conversation",
      desc: "Comment and collaborate on articles.",
      img: slider5,
    },
  ];

  return (
    <div className="mb-12">
      <div
        className="py-16 px-5 md:px-16 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(49, 46, 129, 0.7)",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
      
          <div className="w-full md:w-1/2 text-center md:text-left space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold">
              Share Your Knowledge Through Articles
            </h1>
            <p className="text-lg md:text-xl text-gray-100">
              Write articles, inspire others, and discover ideas from fellow
              thinkers.
            </p>
            <button
              onClick={() => navigate("/allArticles")}
              className="bg-secondary hover:bg-primary cursor-pointer px-4 py-1.5 rounded-full font-semibold transition"
            >
              Explore Articles
            </button>
          </div>

         
          <div className="w-full md:w-1/2">
            <Swiper
              modules={[EffectCoverflow, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              speed={100}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                480: { slidesPerView: 1.2 },
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 250,
                modifier: 2.5,
                slideShadows: false,
              }}
              className="w-full"
            >
              {banners.map((banner) => (
                <SwiperSlide
                  key={banner.id}
                  className="!flex justify-center items-center"
                >
                  <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] xl:w-[460px] relative bg-white text-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={banner.img}
                      alt={banner.title}
                      className="w-full h-64 md:h-72 lg:h-80 xl:h-[22rem] object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-5 text-center text-white">
                      <h2 className="text-lg md:text-xl font-bold mb-1">
                        {banner.title}
                      </h2>
                      <p className="text-sm">{banner.desc}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
