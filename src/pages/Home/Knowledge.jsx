import React from 'react';
import {
  FaPenFancy, FaComments, FaTags,
  FaUserCircle, FaBookReader, FaUsers
} from 'react-icons/fa';

const Knowledge = () => {
  return (
    <section className="m-4 md:m-8 pb-24">
      <div className="container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-2xl font-bold">Empowering Minds Through Shared Knowledge</h2>
        <p className="text-gray-500">Explore how Knowvia helps contributors and learners grow together</p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaPenFancy size={25} className="text-secondary" /> Write & Share Articles
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Publish your knowledge easily</p>
            <p>Use a rich text editor</p>
            <p>Reach thousands of learners</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaComments size={25} className="text-secondary" /> Engage with Comments
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Discuss ideas openly</p>
            <p>Ask questions or share feedback</p>
            <p>Build meaningful conversations</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaTags size={25} className="text-secondary" /> Curated Topics
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Discover trending subjects</p>
            <p>Browse by category </p>
            <p>Stay updated on your interests</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaUserCircle size={25} className="text-secondary" /> Build Your Profile
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Track your contributions</p>
            <p>Showcase your expertise</p>
            <p>Grow your reputation</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaBookReader size={25} className="text-secondary" /> Learn From Others
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Read expert-written articles</p>
            <p>Comment content for later</p>
            <p>Expand your knowledge daily</p>
          </div>
        </div>

        <div className="flex flex-col items-center p-4 rounded-lg  transition">
          <h3 className="my-3 text-xl font-semibold text-center flex items-center gap-2">
            <FaUsers size={25} className="text-secondary" /> Collaborative Growth
          </h3>
          <div className="space-y-1 leading-tight text-center">
            <p>Connect with like-minded people</p>
            <p>Contribute as a team</p>
            <p>Grow the knowledge ecosystem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
