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

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          Moderation Policy
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          At Knowvia, we strive to maintain a respectful, informative, and safe environment for all users.
          Our moderation policy ensures content integrity and a positive user experience.
        </p>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Content Review Process</h2>
          <p>
            All submitted articles go through a manual review by our moderation team before being published. We assess the content for quality, relevance, and adherence to community guidelines.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">2. Grounds for Rejection</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Plagiarized or duplicate content</li>
            <li>Inaccurate or misleading information</li>
            <li>Hateful, discriminatory, or violent language</li>
            <li>Promotion of illegal activities or harmful behavior</li>
            <li>Spammy or overly promotional content</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">3. Community Conduct</h2>
          <p>
            Contributors and users must maintain respectful behavior in comments, messages, and any interactions within the platform. Harassment or abuse will not be tolerated.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">4. Reporting Violations</h2>
          <p>
            Users can report content or behavior that violates our policies via the report feature or by contacting us directly. Our team investigates all reports promptly and fairly.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">5. Actions We May Take</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Content removal or edits</li>
            <li>Warnings to the contributor</li>
            <li>Temporary or permanent account suspension</li>
            <li>Limiting specific features for misuse</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">6. Appeal Process</h2>
          <p>
            Contributors who disagree with a moderation decision may contact our support team with a detailed explanation. We review appeals on a case-by-case basis.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">7. Policy Updates</h2>
          <p>
            This policy may be updated from time to time to reflect platform growth and evolving community standards. Users will be notified of major changes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ModerationPolicy;
