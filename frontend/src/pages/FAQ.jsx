import "./Faq.css";
import { useState } from "react";

const faqData = [
  {
    question: "What is BrightPath IT Academy & Learning Hub, and what makes it different?",
    answer:
      "BrightPath IT Academy & Learning Hub is a practical, skill-focused IT training and online learning platform designed to bridge the gap between academic knowledge and real-world industry expectations. Unlike traditional learning platforms that focus heavily on theory, BrightPath emphasizes hands-on projects, guided learning paths, and industry-relevant skills that prepare learners to apply what they learn in real scenarios."
  },
  {
    question: "Who is BrightPath designed for?",
    answer:
      "BrightPath is designed for a wide range of learners, including students, fresh graduates, career switchers, and working professionals. Whether you are starting from scratch or looking to upgrade your existing IT skills, BrightPath provides structured learning paths that adapt to different experience levels and learning goals."
  },
  {
    question: "Do I need prior IT or coding experience to enroll?",
    answer:
      "No prior IT or coding experience is required for beginner-level courses. BrightPath offers step-by-step learning paths that start from the fundamentals and gradually progress to more advanced concepts. For learners with existing experience, intermediate and advanced courses are available to deepen technical expertise."
  },
  {
    question: "Are all BrightPath courses conducted fully online?",
    answer:
      "Yes. BrightPath operates through an interactive online learning platform that allows learners to access lessons, resources, and projects anytime and anywhere. This flexible structure ensures that learners can study according to their own schedule without being restricted by location or fixed class timings."
  },
  {
    question: "How are BrightPath courses structured?",
    answer:
      "Each course is organized into clearly defined modules and guided learning paths. Lessons are combined with hands-on exercises, practical assignments, and real-world projects to ensure learners not only understand concepts but also gain the confidence to apply them in professional environments."
  },
  {
    question: "Can I learn at my own pace on BrightPath?",
    answer:
      "Yes. BrightPath strongly supports self-paced learning. Learners can move through course materials at a comfortable speed, revisit lessons when needed, and manage their learning schedule alongside academic, personal, or professional commitments."
  },
  {
    question: "What kind of projects will I work on during the courses?",
    answer:
      "Projects on BrightPath are designed to reflect real-world IT scenarios. Depending on the course, learners may work on tasks such as building functional applications, solving technical problems, implementing system features, or developing portfolio-ready projects that demonstrate practical skills to potential employers."
  },
  {
    question: "Will I receive a certificate after completing a course?",
    answer:
      "Yes. Learners who successfully complete a course will receive a certificate of completion. These certificates reflect the practical skills and competencies gained throughout the course and can be used to support academic portfolios or professional resumes."
  },
  {
    question: "How does BrightPath help with career readiness?",
    answer:
      "BrightPath focuses on career readiness by emphasizing practical skills, real-world projects, and structured learning paths aligned with industry needs. The platform aims to help learners build confidence, technical competence, and a clear understanding of how their skills apply in professional IT roles."
  },
  {
    question: "Is BrightPath suitable for working professionals with limited time?",
    answer:
      "Absolutely. BrightPath is built with flexibility in mind. The self-paced learning model allows working professionals to study during their free time, without pressure from fixed schedules, while still gaining meaningful and applicable IT skills."
  },
  {
    question: "How can I get support if I face difficulties during a course?",
    answer:
      "BrightPath provides structured guidance through course materials and platform support. Learners can refer to provided resources, follow guided paths, and seek assistance through available support channels to ensure a smooth and productive learning experience."
  },
  {
    question: "What is the long-term vision of BrightPath IT Academy & Learning Hub?",
    answer:
      "The long-term vision of BrightPath is to become a trusted IT learning hub that supports lifelong learning, empowers individuals with future-ready skills, and continuously adapts to the evolving demands of the digital and technology-driven world."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      {/* HERO */}
      <div className="faq-hero">
        <h1 className="faq-title">Frequently Asked Questions</h1>
        <p className="faq-subtitle">
          Everything you need to know about learning with BrightPath IT Academy & Learning Hub.
        </p>
      </div>

      {/* FAQ GLASS BOX */}
      <div className="faq-glass">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
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
    </section>
  );
}
