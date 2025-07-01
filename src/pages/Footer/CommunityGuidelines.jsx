import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const CommunityGuidelines = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Community Guidelines</title>
      </Helmet>

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-secondary mb-2">
          Community Guidelines
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
          At Knowvia, we are committed to maintaining a respectful, collaborative, and enriching space for all users. These guidelines ensure that our community remains welcoming, safe, and inclusive.
        </p>
      </div>

      <section className="space-y-8 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Be Respectful</h2>
          <p>
            Treat others with kindness and courtesy. Avoid personal attacks, hate speech, and disrespectful behavior toward fellow community members.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">2. Share Constructively</h2>
          <p>
            Provide meaningful, constructive feedback and contribute positively to discussions. If you disagree with someone, do so respectfully and with the intent to build understanding.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">3. Stay On Topic</h2>
          <p>
            Keep your posts and comments relevant to the topic at hand. Off-topic or spammy content may be removed to maintain the focus of discussions.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">4. Respect Intellectual Property</h2>
          <p>
            Do not post copyrighted content or images unless you have the right to use them. Always credit original creators when referencing their work.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">5. Keep It Safe for Everyone</h2>
          <p>
            Avoid sharing harmful, explicit, or inappropriate content. Content that promotes violence, discrimination, or illegal activities will not be tolerated.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">6. Reporting & Enforcement</h2>
          <p>
            If you encounter behavior that violates these guidelines, report it to our moderation team. Repeated or severe violations may result in content removal or account suspension.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">7. Keep Growing</h2>
          <p>
            We’re here to learn and grow together. Engage thoughtfully, ask questions, and be open to new perspectives. Together, we create a valuable and diverse knowledge-sharing community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CommunityGuidelines;
