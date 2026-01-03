import "../style/Home.css";
import { Link } from "react-router-dom";
import robot1 from "../assets/robot_1.png";
import code from "../assets/code.jpg";
import cyber from "../assets/cyber.jpg";
import data from "../assets/data.jpg";

export default function Home() {
  return (
    <section className="home">
      <div className="snow" aria-hidden="true"></div>

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

      <div className="course-preview">
        <div className="course-header">
          <h2 className="section-title">Popular Learning Paths</h2>
          <Link to="/courses" className="view-more-link">
            View more courses →
          </Link>
        </div>

        <div className="course-grid">
          <article className="course-card">
            <div className="course-media">
              <img src={code} alt="Introduction to Coding" />
            </div>

            <div className="course-body">
              <h3>Introduction to Coding</h3>
              <p className="course-desc">
                Learn programming fundamentals through simple, guided exercises
                and mini projects designed for beginners.
              </p>
            </div>
          </article>

          <article className="course-card">
            <div className="course-media">
              <img src={cyber} alt="Cybersecurity Basics" />
            </div>

            <div className="course-body">
              <h3>Cybersecurity Basics</h3>
              <p className="course-desc">
                Understand online safety, ethical hacking concepts, and how
                digital systems stay protected.
              </p>
            </div>
          </article>

          <article className="course-card">
            <div className="course-media">
              <img src={data} alt="Data & Logical Thinking" />
            </div>

            <div className="course-body">
              <h3>Data & Logical Thinking</h3>
              <p className="course-desc">
                Build strong logic and decision-making skills using real-world
                examples and simple data thinking.
              </p>
            </div>
          </article>
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