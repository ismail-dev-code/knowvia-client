import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import FaqAnimation from "../assets/lotties/faq_animation.json";

const Faq = () => {
  const faqs = [
    {
      question: "What is Knowvia?",
      answer:
        "It's a knowledge-sharing platform where students and individuals can publish articles, exchange insights, and share content across diverse topics.",
    },
    {
      question: "How can I create an account?",
      answer:
        "You can sign up by clicking the 'Register' button on the top right and filling out the registration form.",
    },
    {
      question: "Is Knowvia free to use?",
      answer:
        "Yes, Knowvia offers free access to most of its learning resources and community features.",
    },
    {
      question: "Can I contribute articles?",
      answer:
        "Yes, we encourage contributions. To submit an article, please log in first, as the 'Post Article' feature is available to registered users only. Once logged in, go to the 'Post Article' in the navigation bar, fill out the form, and click the 'Submit Article' button.",
    },
    {
      question: "How do I edit or delete my articles?",
      answer:
        "You can manage your articles in 'My Articles' in the navigation bar, where you can edit or delete your posts anytime.",
    },
    {
      question: "Is there a way to interact with other users?",
      answer:
        "Yes, Knowvia allows user interaction through the comment section available on every article’s detail page. To like or comment, please make sure you're logged in.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions to reset your password via email.",
    },
    {
      question: "Can I save articles to read later?",
      answer:
        "Yes, you can save articles to your 'My Articles' page. This way, you can easily access and read your saved articles anytime you want.",
    },
    {
      question: "What topics are covered on Knowvia?",
      answer:
        "Knowvia covers a wide range of topics including education, health, lifestyle, business, technology, science, art, environment, and personal development.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to our support team via the 'Contact Us' page or by emailing support@knowvia.com.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{ padding: "20px", maxWidth: "1300px", margin: "0 auto" }}
    >
      <div className="flex justify-center">
        <Player
          autoplay
          loop
          src={FaqAnimation}
          style={{ height: "300px", width: "300px" }}
        />
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>

      {faqs.map(({ question, answer }, index) => (
        <motion.div
          key={index}
          className="collapse collapse-plus bg-base-100 mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.4 }}
          viewport={{ once: true }}
        >
          <input
            type="radio"
            name="faq-accordion"
            defaultChecked={index === 0}
            id={`faq-radio-${index}`}
          />
          <div
            className="collapse-title font-semibold cursor-pointer"
            htmlFor={`faq-radio-${index}`}
          >
            {question}
          </div>
          <div className="collapse-content text-gray-400 text-sm">
            <p>{answer}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Faq;
