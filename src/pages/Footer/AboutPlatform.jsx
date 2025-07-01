import { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutPlatform = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | About This Platform</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        About This Platform
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Knowvia is a digital publishing platform that allows users to read, write, and interact with content across a wide variety of knowledge domains.
      </p>

      <section className="space-y-6 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Core Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Article publishing with editor support</li>
            <li>Interactive categories and tags</li>
            <li>Like, comment, and save content</li>
            <li>Author profiles and analytics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Technologies Used</h2>
          <p>
            The platform is built with the MERN stack—MongoDB, Express, React, and Node.js—along with modern tools like Tailwind CSS, Firebase Auth, and Framer Motion for smooth interactions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Why Use Knowvia?</h2>
          <p>
            Whether you want to share your learning, build a digital portfolio, or explore content beyond mainstream media, Knowvia gives you the tools to do so easily and meaningfully.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPlatform;
