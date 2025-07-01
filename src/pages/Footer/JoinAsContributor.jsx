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

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          Join as Contributor
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          We're thrilled to have you consider contributing to Knowvia. Please
          review the guidelines and terms below before becoming a contributor.
        </p>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            1. Purpose
          </h2>
          <p>
            Knowvia is a community-driven platform for sharing knowledge,
            insights, and real-world experiences through high-quality articles.
            As a contributor, your role is to share meaningful, original content
            that adds value to our audience.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            2. Contributor Guidelines
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Submit only original, plagiarism-free content.</li>
            <li>
              Ensure your article is factually accurate and well-researched.
            </li>
            <li>
              Respect community standards—no hate speech, harassment, or
              offensive language.
            </li>
            <li>
              Use proper grammar, structure, and citations where applicable.
            </li>
            <li>
              Only use images or media you have rights to or that are
              royalty-free.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            3. Content Rights
          </h2>
          <p>
            You retain full ownership of your articles. However, by submitting
            content to Knowvia, you grant us the non-exclusive right to publish,
            edit, and distribute your content on our platform and promotional
            materials, with full credit given.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            4. Review & Moderation
          </h2>
          <p>
            All submissions are subject to review by our editorial team. We
            reserve the right to approve, edit, or reject content that doesn’t
            align with our standards or values.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            5. Termination
          </h2>
          <p>
            We may revoke contributor privileges at any time for violations of
            the guidelines, misuse of the platform, or unethical behavior.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            6. Final Notes
          </h2>
          <p>
            Our goal is to empower contributors to share meaningful content and
            grow their personal brand. If you have questions, feel free to
            contact us.
          </p>
        </div>
      </section>

      {/* <div className="mt-10 text-center">
        <Link
          to="/contributor-registration"
          className="btn btn-secondary btn-wide hover:bg-blue-600 text-white"
        >
          Apply to Become a Contributor
        </Link>
      </div> */}
    </div>
  );
};

export default JoinAsContributor;
