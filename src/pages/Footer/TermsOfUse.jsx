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

      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        Terms of Use
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center max-w-3xl mx-auto">
        These terms govern your use of the Knowvia platform. By using our services, you agree to these terms.
      </p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Eligibility</h2>
          <p>
            Knowvia is open to all learners and knowledge seekers, regardless of age. We welcome students, educators, and curious minds to participate. 
            However, all users must use the platform responsibly and follow our community guidelines and terms of use. 
            Any misuse, harmful behavior, or violation of platform rules may result in restricted access or account termination.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">2. Content Ownership</h2>
          <p>
            You retain rights to the content you publish. By uploading content, you grant Knowvia permission to display and distribute it
            on our platform and associated promotional materials.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">3. User Conduct</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not post harmful, abusive, or misleading content.</li>
            <li>Respect other users and maintain civil discourse.</li>
            <li>Do not attempt to hack, spam, or disrupt the platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">4. Termination</h2>
          <p>
            We may suspend or remove accounts that violate these terms, our guidelines, or engage in harmful behavior. 
            This is to ensure a safe and welcoming environment for all users.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">5. Changes to Terms</h2>
          <p>
            Knowvia may update these terms from time to time. We will notify users of major changes. 
            Continued use of the platform after updates implies your acceptance of the revised terms.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;
