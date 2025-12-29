import "./About.css";
import aboutImage from "../assets/robot_1.png"; // optional image for hero (can remove if unused)

export default function About() {
  return (
    <section className="about">
      
      {/* HERO / INTRO */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h1 className="about-title">About Us</h1>

          <h2 className="about-heading">
            BrightPath IT Academy & Learning Hub
          </h2>

          <p className="about-highlight">
            Your pathway to <span>practical IT skills</span> and{" "}
            <span>real-world readiness</span>.
          </p>

          <p className="about-description">
            We empower learners through hands-on IT training and an interactive
            online learning platform designed to bridge the gap between education
            and industry.
          </p>
        </div>

        <div className="about-hero-image">
          <img src={aboutImage} alt="BrightPath learning illustration" />
        </div>
      </div>

      {/* ABOUT BRIGHTPATH (WIDE CARD) */}
      <div className="about-card about-wide">
        <h4>About BrightPath</h4>

        <p>
          BrightPath IT Academy & Learning Hub is an IT training and online
          learning platform focused on delivering practical, industry-relevant
          skills to students and aspiring IT professionals.
        </p>

        <p>
          Our platform offers structured courses, guided learning paths, and
          hands-on projects that prepare learners for real-world challenges. By
          combining technical training with professional development, BrightPath
          aims to support lifelong learning and career readiness in the rapidly
          evolving digital landscape.
        </p>
      </div>

      {/* MISSION & VISION */}
      <div className="about-cards">
        <div className="about-card">
          <h4>⭐ Mission Statement</h4>
          <p>
            BrightPath IT Academy & Learning Hub is committed to providing
            accessible, practical, and industry-relevant IT education through
            structured training programs and an interactive online learning
            platform.
          </p>
        </div>

        <div className="about-card">
          <h4>🚀 Vision Statement</h4>
          <p>
            Our vision is to become a trusted IT learning hub that empowers
            students and professionals with future-ready skills, supports
            lifelong learning, and bridges the gap between education and
            industry.
          </p>
        </div>
      </div>

      {/* TEAM */}
      <div className="about-team">
        <h3>Our Team</h3>

        <div className="team-grid">
          <div className="team-card">
            <h4>Anunitha</h4>
            <span>Chief Learning Officer (CLO) & Founder</span>
            <p>
              Leads the academic vision of BrightPath by designing
              industry-relevant learning paths and ensuring high-quality,
              practical IT training for all learners.
            </p>
            <p className="team-note">
              Empowering learners with practical IT skills for the future.
            </p>
          </div>

          <div className="team-card">
            <h4>Venmadhi</h4>
            <span>Head of Digital Platform & Technology</span>
            <p>
              Oversees the development and performance of the online learning
              platform, ensuring a smooth, responsive, and user-friendly digital
              experience.
            </p>
            <p className="team-note">
              Empowering learners with practical IT skills for the future.
            </p>
          </div>

          <div className="team-card">
            <h4>Menakha</h4>
            <span>Learning Experience & Operations Manager</span>
            <p>
              Manages day-to-day learning operations and ensures an engaging,
              well-structured learning experience that supports student progress
              and success.
            </p>
            <p className="team-note">
              Empowering learners with practical IT skills for the future.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
