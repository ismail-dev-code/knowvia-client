import { useEffect } from "react";
import { Helmet } from "react-helmet";

const CommunityGuidelines = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Community Guidelines</title>
      </Helmet>

      <div className="mb-10 text-left">
        <h1 className="text-xl md:text-3xl font-bold text-secondary mb-4">
          Community Guidelines
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
          At Knowvia, we are committed to creating a respectful, collaborative,
          and enriching environment for all users. These guidelines outline the
          standards of conduct expected from every community member to ensure a
          welcoming, safe, and inclusive space.
        </p>
      </div>

      <section className="space-y-8 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            1. Be Respectful
          </h2>
          <p>
            Engage with others in a courteous and professional manner. Avoid
            personal attacks, discriminatory remarks, hate speech, or any form
            of harassment toward fellow members.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            2. Share Constructively
          </h2>
          <p>
            Contribute meaningful, constructive feedback that adds value to the
            discussion. Disagreements are natural—address them respectfully with
            the goal of fostering understanding and collaboration.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            3. Stay On Topic
          </h2>
          <p>
            Keep posts and comments relevant to the subject matter. Off-topic,
            irrelevant, or spam content may be removed to maintain productive
            conversations.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            4. Respect Intellectual Property
          </h2>
          <p>
            Only share content you own or have rights to use. When referencing
            the work of others, provide proper attribution and give credit to
            original creators.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            5. Keep It Safe for Everyone
          </h2>
          <p>
            Refrain from sharing harmful, explicit, or otherwise inappropriate
            content. Content that promotes violence, discrimination, or illegal
            activities will not be permitted under any circumstances.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            6. Reporting & Enforcement
          </h2>
          <p>
            If you encounter behavior that violates these guidelines, use our
            reporting tools or contact the moderation team directly. Serious or
            repeated violations may lead to content removal, feature
            restrictions, or account suspension.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            7. Keep Growing
          </h2>
          <p>
            Approach every interaction with an open mind and a willingness to
            learn. Ask thoughtful questions, share your expertise, and embrace
            diverse perspectives to help our community grow stronger together.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CommunityGuidelines;
