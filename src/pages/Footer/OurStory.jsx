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

      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        Our Story
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Knowvia started with a simple mission—making learning accessible and giving everyone a voice to share their unique insights.
      </p>

      <section className="space-y-6 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">How We Began</h2>
          <p>
            Frustrated with limited platforms for grassroots knowledge sharing, we created Knowvia to allow everyday learners and thinkers to contribute ideas that matter.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Milestones</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>2023 - Idea conception and early community planning</li>
            <li>2024 - Platform development and pilot testing</li>
            <li>2025 - Public launch with curated contributor base</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Where We’re Going</h2>
          <p>
            We aim to be the go-to platform for self-learners, community educators, and niche knowledge hubs. Our roadmap includes more features, mentorship options, and recognition systems for top contributors.
          </p>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
