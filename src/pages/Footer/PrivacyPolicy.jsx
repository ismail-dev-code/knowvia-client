import { useEffect } from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Helmet>
        <title>Knowvia | Privacy Policy</title>
      </Helmet>

      <h1 className="text-3xl font-bold text-secondary mb-4 text-center">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center max-w-3xl mx-auto">
        Your privacy matters to us. This page explains how we collect, use, and protect your data when you use Knowvia.
      </p>

      <section className="space-y-6 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">1. Information We Collect</h2>
          <p>We collect basic personal information such as your name, email address, and profile details when you register or publish content.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">2. How We Use Your Information</h2>
          <p>Your data helps us personalize your experience, improve platform features, and communicate updates or service information.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">3. Data Protection</h2>
          <p>We implement strict measures to protect your information from unauthorized access or misuse, including encrypted storage and limited access controls.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">4. Third-Party Sharing</h2>
          <p>We do not sell or share your personal data with third parties except for trusted services required to operate Knowvia (e.g., authentication providers).</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">5. Your Rights</h2>
          <p>You can access, update, or delete your information anytime. Contact us if you'd like to make a privacy-related request.</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
