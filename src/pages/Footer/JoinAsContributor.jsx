import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const JoinAsContributor = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Join as Contributor</title>
      </Helmet>

      <div className="mb-10 text-left">
        <h1 className="md:text-3xl text-xl font-bold text-secondary mb-4">
          Join as a Contributor
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          We are excited to welcome you to the Knowvia contributor community.
          Please take a moment to review the guidelines and terms below before
          applying to become a contributor.
        </p>
      </div>

      <section className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Purpose</h2>
          <p>
            Knowvia is a community-driven platform dedicated to sharing
            knowledge, insights, and real-world experiences through
            high-quality articles. As a contributor, your role is to create
            meaningful, original content that provides value to our readers.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            2. Contributor Guidelines
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Submit only original, plagiarism-free content.</li>
            <li>Ensure all content is factually accurate and well-researched.</li>
            <li>
              Maintain a respectful tone — no hate speech, harassment, or
              offensive language.
            </li>
            <li>Use correct grammar, structure, and citations where needed.</li>
            <li>
              Include only media that you own or that is licensed for free use.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            3. Content Rights
          </h2>
          <p>
            You retain full ownership of your articles. By submitting content to
            Knowvia, you grant us a non-exclusive right to publish, edit, and
            distribute it on our platform and promotional channels, with full
            credit given to you.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            4. Review & Moderation
          </h2>
          <p>
            All submissions are reviewed by our editorial team. We reserve the
            right to approve, edit, or reject any content that does not meet our
            quality standards or align with our values.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            5. Termination
          </h2>
          <p>
            Contributor privileges may be revoked at any time in cases of
            guideline violations, platform misuse, or unethical behavior.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            6. Final Notes
          </h2>
          <p>
            Our mission is to empower contributors to share valuable insights
            and grow their personal brand. If you have questions or need
            clarification, please reach out to our team.
          </p>
        </div>
      </section>

      {/* contributor register page navigation here */}
      {/* <div className="mt-10">
        <Link
          to="/join-as-contributor"
          className="btn btn-secondary btn-wide hover:bg-blue-600 text-white"
        >
          Apply to Become a Contributor
        </Link>
      </div> */}
    </div>
  );
};

export default JoinAsContributor;
