import { useEffect } from "react";
import { Helmet } from "react-helmet";

const AboutKnowvia = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | About Knowvia</title>
      </Helmet>

      <h1 className="text-xl md:text-3xl font-bold text-secondary mb-4">
        About Knowvia
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-3xl">
        <strong>Knowvia</strong> is a modern knowledge-sharing platform built to
        democratize information. It enables individuals to share their ideas,
        expertise, and experiences through well-crafted articles. Our goal is
        to foster an inclusive, respectful community where learners and
        contributors can grow together, inspire others, and make a lasting
        impact.
      </p>

      <section className="space-y-8 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Our Vision
          </h2>
          <p className="text-gray-700">
            To empower people worldwide through a collaborative platform that
            promotes lifelong learning, open access to knowledge, and meaningful
            connections among diverse individuals.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Who Can Use Knowvia?
          </h2>
          <p className="text-gray-700">
            Knowvia is for anyone passionate about learning and sharing
            knowledge. Whether you are a student, hobbyist, educator,
            professional, or simply curious, you’ll find a welcoming space to
            contribute and explore ideas.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            Our Core Values
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Openness and accessibility for all</li>
            <li>Accuracy and integrity in published content</li>
            <li>Mutual respect and inclusivity</li>
            <li>Community-driven collaboration and growth</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutKnowvia;
