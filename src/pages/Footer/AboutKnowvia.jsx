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

      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        About Knowvia
      </h1>
      <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center max-w-3xl mx-auto">
        Knowvia is a platform designed to democratize knowledge by allowing individuals to share their ideas, expertise, and experiences through articles. We believe in creating an inclusive community of learners and contributors who want to grow, inspire, and impact.
      </p>

      <section className="space-y-6 text-sm">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Our Vision</h2>
          <p>
            To empower individuals through a collaborative platform that fosters lifelong learning and open knowledge sharing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Who Can Use Knowvia?</h2>
          <p>
            Anyone passionate about learning or teaching. Whether you're a student, hobbyist, professional, or just curious—you are welcome here.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">Our Values</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Openness and accessibility</li>
            <li>Accuracy and integrity in content</li>
            <li>Respect and inclusivity</li>
            <li>Community-driven growth</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutKnowvia;
