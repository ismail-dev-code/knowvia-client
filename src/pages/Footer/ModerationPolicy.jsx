import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const ModerationPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Moderation Policy</title>
      </Helmet>

      <div className="mb-10 text-left">
        <h1 className="text-xl md:text-3xl font-bold text-secondary mb-4">
          Moderation Policy
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          At Knowvia, we are committed to fostering a respectful, informative,
          and safe environment for all users. This moderation policy outlines
          our review process, community expectations, and the actions we take to
          ensure content integrity and a positive experience for everyone.
        </p>
      </div>

      <section className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            1. Content Review Process
          </h2>
          <p>
            All submitted articles undergo a manual review by our moderation
            team before publication. We assess submissions for quality,
            relevance, originality, and compliance with our community
            guidelines.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            2. Grounds for Rejection
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plagiarized or duplicate content</li>
            <li>Factually inaccurate or misleading information</li>
            <li>Hateful, discriminatory, or violent language</li>
            <li>Promotion of illegal or harmful activities</li>
            <li>Excessively promotional or spam content</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            3. Community Conduct
          </h2>
          <p>
            All contributors and users are expected to engage respectfully in
            comments, messages, and any platform interactions. Harassment,
            abuse, or targeted attacks will not be tolerated under any
            circumstances.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            4. Reporting Violations
          </h2>
          <p>
            Users may report policy violations using our in-platform reporting
            feature or by contacting our support team directly. Every report is
            reviewed promptly, fairly, and confidentially.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            5. Actions We May Take
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Removing or editing content</li>
            <li>Issuing warnings to contributors</li>
            <li>Temporarily or permanently suspending accounts</li>
            <li>Restricting access to specific platform features</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            6. Appeal Process
          </h2>
          <p>
            Contributors who disagree with a moderation decision may submit an
            appeal by contacting our support team with a detailed explanation.
            Appeals are reviewed individually, and final decisions are
            communicated in writing.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            7. Policy Updates
          </h2>
          <p>
            This policy is subject to periodic updates to reflect platform
            growth, industry best practices, and evolving community standards.
            Users will be notified in advance of any major changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ModerationPolicy;
