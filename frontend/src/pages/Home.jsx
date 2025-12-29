import "./Home.css";
import robot1 from "../assets/robot_1.png";

export default function Home() {
  return (
    <section className="home">

      {/* HERO */}
      <div className="home-inner">
        {/* LEFT — TEXT */}
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

        {/* RIGHT — IMAGE */}
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

    </section>
  );
}
