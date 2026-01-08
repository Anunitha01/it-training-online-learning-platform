import "../style/FAQ.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question:
      "I’m new to IT and feel completely lost. Is BrightPath suitable for beginners like me?",
    answer:
      "Yes, BrightPath is specifically designed with beginners in mind. Many learners start their IT journey feeling confused, overwhelmed, or unsure where to begin. BrightPath addresses this by providing structured learning paths that start from the basics and gradually build confidence."
  },
  // Additional FAQ items here...
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  /* Parallax effect */
  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        window.scrollY * 0.15 + "px"
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="faq">
      {/* BACK BUTTON */}
      <div className="faq-back">
        <Link to="/" className="faq-back-link">
          <button className="back-btn">
            ← Back
          </button>
        </Link>
      </div>

      {/* FAQ HERO */}
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about learning with BrightPath IT Academy & Learning Hub.
        </p>
      </div>

      {/* FAQ LAYOUT */}
      <div className="faq-layout">
        <div className="faq-glass">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                {item.question}
                <span className="faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
