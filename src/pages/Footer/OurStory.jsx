import { useEffect } from "react";
import { Helmet } from "react-helmet";

const OurStory = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Our Story</title>
      </Helmet>

      <h1 className="text-xl md:text-3xl font-bold text-secondary mb-4">
        Our Story
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
        <strong>Knowvia</strong> began with a clear mission — to make learning
        accessible for everyone and to give individuals a platform to share
        their unique insights, experiences, and expertise with the world.
      </p>

      <section className="space-y-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            How We Began
          </h2>
          <p className="text-gray-700">
            Inspired by the need for an inclusive space where grassroots
            knowledge could thrive, we built Knowvia to enable everyday learners
            and thinkers to contribute meaningful ideas. We wanted a platform
            where both experts and enthusiasts could have an equal voice.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Milestones
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>
              <strong>2023</strong> — Concept development and community
              blueprinting
            </li>
            <li>
              <strong>2024</strong> — Platform build, beta testing, and feedback
              iteration
            </li>
            <li>
              <strong>2025</strong> — Official public launch with curated
              contributor network
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Where We’re Going
          </h2>
          <p className="text-gray-700">
            Our vision is to become the leading hub for self-learners, community
            educators, and niche knowledge networks. Future developments include
            advanced publishing tools, mentorship opportunities, and recognition
            programs that celebrate top contributors and their impact.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
