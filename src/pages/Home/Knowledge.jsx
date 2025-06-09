import React from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import {
  FaPenFancy,
  FaComments,

  FaUserCircle,
  FaBookReader,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Knowledge = () => {
  return (
    <div className="m-4 md:m-6 pb-8 md:pb-24">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-2xl font-bold">
          Empowering Minds Through Shared Knowledge
        </h2>
        <p className="text-gray-500">
          Explore how Knowvia helps contributors and learners grow together
        </p>
      </div>

      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            icon: <FaPenFancy size={25} className="text-secondary" />,
            title: "Write & Share Articles",
            points: [
              "Publish your knowledge easily",
              "Use a rich text editor",
              "Reach thousands of learners",
            ],
          },
          {
            icon: <FaComments size={25} className="text-secondary" />,
            title: "Engage with Comments",
            points: [
              "Discuss ideas openly",
              "Ask questions or share feedback",
              "Build meaningful conversations",
            ],
          },
          {
            icon: <FaBarsStaggered size={25} className="text-secondary" />,
            title: "Curated Topics",
            points: [
              "Discover trending subjects",
              "Browse by category",
              "Stay updated on your interests",
            ],
          },
          {
            icon: <FaUserCircle size={25} className="text-secondary" />,
            title: "Build Your Profile",
            points: [
              "Track your contributions",
              "Showcase your expertise",
              "Grow your reputation",
            ],
          },
          {
            icon: <FaBookReader size={25} className="text-secondary" />,
            title: "Learn From Others",
            points: [
              "Read expert-written articles",
              "Comment content for later",
              "Expand your knowledge daily",
            ],
          },
          {
            icon: <FaUsers size={25} className="text-secondary" />,
            title: "Collaborative Growth",
            points: [
              "Connect with like-minded people",
              "Contribute as a team",
              "Grow the knowledge ecosystem",
            ],
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col items-center rounded-lg p-4"
          >
            <h3 className="mb-3 text-xl font-semibold flex items-center gap-2">
              {item.icon} {item.title}
            </h3>
            <div className="pb-5 space-y-1 text-sm text-center">
              {item.points.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
