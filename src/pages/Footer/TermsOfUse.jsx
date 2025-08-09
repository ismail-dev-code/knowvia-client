import { useEffect } from "react";
import { Helmet } from "react-helmet";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Terms of Use</title>
      </Helmet>

      <h1 className="md:text-3xl text-xl font-bold text-secondary mb-4">
        Terms of Use
      </h1>
      <p className="text-sm text-gray-600 mb-8 max-w-3xl">
        Welcome to Knowvia. These Terms of Use (“Terms”) govern your access to and
        use of our platform, including all content, features, and services
        provided. By using Knowvia, you agree to comply with and be bound by
        these Terms.
      </p>

      <section className="space-y-8 text-sm leading-relaxed text-gray-800">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Eligibility</h2>
          <p className="text-gray-600">
            Knowvia is open to learners and knowledge seekers of all ages. We
            encourage students, educators, and curious minds to participate.
            Users are expected to use the platform responsibly and in compliance
            with our community guidelines. Misuse, harmful behavior, or
            violations of these Terms may result in restricted access or
            account termination.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">2. Content Ownership</h2>
          <p className="text-gray-600">
            You retain all rights to the content you publish on Knowvia. By
            uploading content, you grant us a non-exclusive, royalty-free license
            to display, distribute, and promote it within the platform and in
            related marketing materials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">3. User Conduct</h2>
          <p className="mb-2 text-gray-600">
            All users must interact respectfully and refrain from harmful or
            disruptive activities. Specifically, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Not post harmful, abusive, or misleading content.</li>
            <li>Respect other users and maintain constructive dialogue.</li>
            <li>Avoid hacking, spamming, or attempting to disrupt the platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">4. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate accounts that violate
            these Terms or engage in harmful activities. This ensures a safe,
            respectful, and welcoming environment for all members of the
            community.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">5. Changes to Terms</h2>
          <p className="text-gray-600">
            Knowvia may update these Terms periodically. In the event of
            significant changes, we will notify users. Continued use of the
            platform after updates constitutes your acceptance of the revised
            Terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
