import "../style/Home.css";
import { Link } from "react-router-dom";
import robot1 from "../assets/robot_1.png";
import robot2 from "../assets/robot_2.png";
import robot3 from "../assets/robot_3.png";

export default function Home() {
  return (
    <section className="home">

      {/* HERO */}
      <div className="home-inner">
        <div className="home-text">
          <h1 className="hero-title">
            <span className="hero-bold">Empowering All Ages</span><br />
            with <span className="hero-highlight">IT Skills</span><br />
            for the <span className="hero-bold">Future</span>
          </h1>

          <p className="hero-description">
            Interactive online courses in coding, data science,
            cybersecurity, and more. Spark an interest in technology at any age!
          </p>

          <button className="hero-btn">Get Started</button>
        </div>

        <div className="home-image">
          <img src={robot1} alt="Learning illustration" />
        </div>
      </div>

      {/* STATS */}
      <div className="stats-wrapper">
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-icon blue">👤</div>
            <div>
              <h3>1,500+</h3>
              <p>Happy Students</p>
            </div>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <div className="stat-icon blue">▶</div>
            <div>
              <h3>200+</h3>
              <p>Fun & Engaging Courses</p>
            </div>
          </div>

          <div className="stat-divider" />

          <div className="stat-item">
            <div className="stat-icon yellow">★</div>
            <div>
              <h3>98%</h3>
              <p>Parent & Learner Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* COURSE PREVIEW */}
      <div className="course-preview">
        <div className="course-header">
          <h2 className="section-title">Popular Learning Paths</h2>
          <Link to="/courses" className="view-more-link">
            View more courses →
          </Link>
        </div>

        <div className="course-grid">
          <div className="course-card">
            <img src={robot2} alt="Coding" />
            <h3>Introduction to Coding</h3>
            <p>
              Learn programming fundamentals through simple, guided,
              hands-on exercises designed for beginners.
            </p>
          </div>

          <div className="course-card">
            <img src={robot3} alt="Cybersecurity" />
            <h3>Cybersecurity Basics</h3>
            <p>
              Understand online safety, ethical hacking concepts,
              and how digital systems stay protected.
            </p>
          </div>

          <div className="course-card">
            <img src={robot1} alt="Data Science" />
            <h3>Data & Logical Thinking</h3>
            <p>
              Build problem-solving skills using data,
              logic, and real-world case studies.
            </p>
          </div>
        </div>
      </div>

      {/* WHY BRIGHTPATH */}
      <div className="why-section">
        <h2 className="section-title">Why Learn With BrightPath?</h2>

        <div className="why-grid">
          <div className="why-item">
            <h4>Structured Learning</h4>
            <p>
              Clear learning paths that guide students step by step,
              without confusion or overwhelm.
            </p>
          </div>

          <div className="why-item">
            <h4>Practical Focus</h4>
            <p>
              Courses emphasize hands-on practice and real-world application,
              not just theory.
            </p>
          </div>

          <div className="why-item">
            <h4>Beginner Friendly</h4>
            <p>
              Designed for learners of all ages, even with zero
              technical background.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
