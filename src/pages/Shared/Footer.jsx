import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaLinkedin, FaRegLightbulb } from "react-icons/fa6";
import { Link } from "react-router";

const usefulLinks = [
  { label: "About Knowvia", href: "/knowvia-about" },
  { label: "Our Story", href: "/our-story" },
  { label: "About This Platform", href: "/about-platform" },
];

const contributorLinks = [
  { label: "Join as Contributor", href: "/join-as-contributor" },
  { label: "Moderation Policy", href: "/moderation-policy" },
  { label: "Community Guidelines", href: "/community-guidelines" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Use", href: "#" },
];

const socialLinks = [
  {
    icon: <FaYoutube size={25} />,
    title: "YouTube",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
  {
    icon: <FaTwitter size={25} />,
    title: "Twitter",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
  {
    icon: <FaGithub size={25} />,
    title: "GitHub",
    href: "https://github.com/ismail-dev-code",
    target: "_blank",
  },
  {
    icon: <FaLinkedin size={25} />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ismail-hossain24",
    target: "_blank",
  },
];

const contactInfo = {
  email: "support@knowvia.com",
  phone: "+88 (018) 567-890",
  address: "172 Knowledge Rd, Maijdee, Noakhali, Bangladesh",
};

const Footer = () => {
  return (
    <footer className="py-10 bg-base-200 text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <Link
              to={"/"}
              className="text-2xl flex items-center gap-1.5 font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-violet-400 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-500 hover:to-violet-500"
            >
              <FaRegLightbulb className="text-secondary" />
              Knowvia
            </Link>
            <p className="mt-1 text-sm dark:text-gray-400">
              A knowledge-sharing platform where students and individuals can
              publish articles, exchange insights, and share content across
              diverse topics.
            </p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2 text-secondary">
              About Us
            </p>
            <ul className="space-y-1 text-sm">
              {usefulLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-blue-600 dark:hover:text-violet-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2 text-secondary">
              Terms & Conditions
            </p>
            <ul className="space-y-1 text-sm">
              {contributorLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="hover:text-blue-600 dark:hover:text-violet-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-2 text-secondary">
              Contact Us
            </p>
            <ul className="space-y-1 text-sm">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-violet-400"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-600 dark:hover:text-violet-400"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>Address: {contactInfo.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Knowvia. All rights reserved.
          </div>

          <div className="flex gap-4">
            {policyLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-blue-600 dark:hover:text-violet-400"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex space-x-4">
            {socialLinks.map(({ icon, title, href, target }) => (
              <a
                key={title}
                href={href}
                title={title}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
                className="hover:text-blue-600 dark:hover:text-violet-400"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
