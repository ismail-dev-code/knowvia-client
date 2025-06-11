import React, { useEffect, useState } from "react";
import Faq from "../../components/Faq";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import aboutUs from "../../assets/lotties/about_us_animation.json";
import AnimationWrapper from "../../assets/animations/AnimationWrapper";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  const [aboutData, setAboutData] = useState([]);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/knowvia_about_us.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load About Us content");
        }
        return res.json();
      })
      .then((data) => {
        setAboutData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  if (error) {
    return <div className="text-red-500 text-center mt-6">Error: {error}</div>;
  }

  const entriesToShow = showAll ? aboutData : aboutData.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>Knowvia | About Us</title>
      </Helmet>
      <AnimationWrapper duration={0.8}>
        <h1 className="text-2xl font-bold text-left px-4 max-w-6xl mx-auto mt-10">
          About Us
        </h1>
      </AnimationWrapper>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center px-4">
        <div className="w-full max-w-[800px]">
          <Player
            autoplay
            loop
            src={aboutUs}
            className="w-full"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        <div className="w-full text-left mt-6">
          {entriesToShow.map((entry, entryIndex) => (
            <div key={entryIndex} className="mb-8">
              <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
              {entry.content.map((paragraph, i) => (
                <p key={i} className="mb-3 text-gray-600 text-sm md:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {aboutData.length > 5 && (
            <div className="text-center">
              <motion.button
                onClick={handleToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 btn-primary btn cursor-pointer rounded-lg text-sm md:text-base transition"
              >
                {showAll ? "Show Less" : "Read More About Knowvia"}
              </motion.button>
            </div>
          )}
        </div>
      </div>

      <Faq />
    </>
  );
};

export default AboutUs;
