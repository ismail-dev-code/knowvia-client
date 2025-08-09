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

      <h1 className="text-xl md:text-3xl font-bold text-secondary mb-4">
        About This Platform
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
        <strong>Knowvia</strong> is a modern digital publishing platform designed
        for sharing, discovering, and engaging with knowledge across a wide
        range of domains. It empowers creators to publish high-quality content
        and provides readers with an interactive, distraction-free experience.
      </p>

      <section className="space-y-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Core Features
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Publish and edit articles with a rich text editor</li>
            <li>Organize content through categories and tags</li>
            <li>Engage with posts via likes, comments, and saves</li>
            <li>Access author profiles with activity and analytics</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Technologies Used
          </h2>
          <p className="text-gray-700">
            Knowvia is built using the <strong>MERN stack</strong>—MongoDB,
            Express, React, and Node.js—combined with Tailwind CSS for styling,
            Firebase Authentication for secure access, and Framer Motion for
            smooth, engaging animations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Why Choose Knowvia?
          </h2>
          <p className="text-gray-700">
            Whether you’re a writer building your portfolio, a learner sharing
            insights, or a reader exploring thought-provoking topics, Knowvia
            offers a streamlined platform to connect, create, and contribute to
            a growing knowledge community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPlatform;
