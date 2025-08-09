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

      <h1 className="md:text-3xl text-xl font-bold text-secondary mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-600 mb-8 max-w-3xl">
        At Knowvia, we value and respect your privacy. This Privacy Policy
        outlines how we collect, use, store, and protect your personal
        information when you interact with our platform. By using Knowvia, you
        agree to the terms described below.
      </p>

      <section className="space-y-8 text-sm leading-relaxed text-gray-800">
        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            1. Information We Collect
          </h2>
          <p className="text-gray-600">
            We may collect personal information that you voluntarily provide,
            including your name, email address, profile photo, and other details
            associated with your account. Additionally, we may collect technical
            information such as your IP address, browser type, and device
            information for security and analytics purposes.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>Provide and improve our services.</li>
            <li>Personalize your user experience.</li>
            <li>Communicate important updates and announcements.</li>
            <li>Ensure the security and integrity of the platform.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            3. Data Protection
          </h2>
          <p className="text-gray-600">
            We implement strict security measures to safeguard your data,
            including encrypted storage, secure transmission protocols, and
            limited access to sensitive information. However, no online service
            can guarantee absolute security, so we encourage you to take steps
            to protect your own information as well.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            4. Third-Party Sharing
          </h2>
          <p className="text-gray-600">
            We do not sell your personal information. We may share your data
            only with trusted third-party service providers necessary for
            operating Knowvia (such as authentication services or analytics
            tools), and only to the extent required to perform their services.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            5. Your Rights
          </h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your personal
            information at any time. To make a privacy-related request, please
            contact us using the information provided on our support page.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-primary mb-2">
            6. Updates to This Policy
          </h2>
          <p className="text-gray-600">
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, technology, or legal requirements. Any
            significant updates will be communicated to you, and continued use
            of the platform after changes indicates your acceptance of the
            revised policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
