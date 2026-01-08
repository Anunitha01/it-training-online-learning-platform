import "../style/FAQ.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ICONS */
import bulb from "../assets/bulb_icon_FAQ.png";
import paperPlane from "../assets/paper_plane_icon_FAQ.png";
import setting from "../assets/setting_icon_FAQ.png";
import magnify from "../assets/magnifying_glass_icon_FAQ.png";
import target from "../assets/target_icon_FAQ.png";
import clipboard from "../assets/clipboard_icon_FAQ.png";
import chat from "../assets/chat_icon_FAQ.png";

const faqData = [
  {
    question:
      "I’m new to IT and feel completely lost. Is BrightPath suitable for beginners like me?",
    answer:
      "Yes, BrightPath is specifically designed with beginners in mind. Many learners start their IT journey feeling confused, overwhelmed, or unsure where to begin. BrightPath addresses this by providing structured learning paths that start from the basics and gradually build confidence."
  },
  {
    question:
      "How is BrightPath different from watching tutorials on YouTube or other platforms?",
    answer:
      "Unlike random tutorials that often lack structure, BrightPath offers guided learning paths designed to build skills step by step."
  },
  {
    question:
      "Do I need any prior coding or IT background before enrolling in BrightPath courses?",
    answer:
      "No prior coding or IT experience is required for beginner-level courses."
  },
  {
    question:
      "Can I really learn practical IT skills online without attending physical classes?",
    answer:
      "Yes. BrightPath focuses on hands-on exercises and real-world projects."
  },
  {
    question:
      "How are BrightPath courses designed to help me apply what I learn in real situations?",
    answer:
      "Courses are structured around real-world application and industry scenarios."
  },
  {
    question:
      "Can I study at my own pace, or do I need to follow a fixed schedule?",
    answer:
      "BrightPath fully supports self-paced learning."
  },
  {
    question:
      "What kind of projects will I work on, and will they be useful for my portfolio?",
    answer:
      "Projects are practical and portfolio-ready."
  }
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
      {/* BACK SYMBOL */}
      <div className="faq-back">
        <Link to="/" className="faq-back-link">
          {/* Just a simple left arrow symbol */}
          <span style={{ fontSize: "2rem", fontWeight: "bold" }}>←</span>
        </Link>
      </div>

      {/* TRIANGLES */}
      <div className="triangle-layer">
        {[...Array(40)].map((_, i) => (
          <span key={i} className={`triangle t${i % 15}`} />
        ))}
      </div>

      {/* HERO */}
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about learning with BrightPath IT Academy & Learning Hub.
        </p>
      </div>

      {/* MAIN LAYOUT */}
      <div className="faq-layout">
        {/* LEFT ICONS */}
        <div className="faq-icons">
          <img src={bulb} className="icon i1" alt="" />
          <img src={paperPlane} className="icon i2" alt="" />
          <img src={setting} className="icon i3" alt="" />
          <img src={magnify} className="icon i4" alt="" />
          <img src={target} className="icon i5" alt="" />
          <img src={clipboard} className="icon i6" alt="" />
          <img src={chat} className="icon i7" alt="" />
        </div>

        {/* FAQ BOX */}
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
