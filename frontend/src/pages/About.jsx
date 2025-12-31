import "../style/About.css";
import aboutImage from "../assets/robot_5.png";
import anunithaImg from "../assets/robot_3.png";
import venmadhiImg from "../assets/venmadhi.jpeg";
import menakhaImg from "../assets/menakha.jpeg";

export default function About() {
  return (
    <section className="about">
      {/* HERO / INTRO */}
      <div className="about-hero">
        <div className="about-hero-text">
          <h1 className="about-title">About Us</h1>
          <h2 className="about-heading">BrightPath IT Academy & Learning Hub</h2>

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

      {/* BIG GLASS BOX */}
      <div className="about-glass">
        {/* ABOUT BRIGHTPATH */}
        <div className="about-wide-card">
          <h3 className="section-title">About BrightPath</h3>
          <p className="section-text">
            BrightPath IT Academy & Learning Hub is an IT training and online
            learning platform focused on delivering practical, industry-relevant
            skills to students and aspiring IT professionals.
          </p>
          <p className="section-text">
            Our platform offers structured courses, guided learning paths, and
            hands-on projects that prepare learners for real-world challenges.
            By combining technical training with professional development,
            BrightPath aims to support lifelong learning and career readiness in
            the rapidly evolving digital landscape.
          </p>
        </div>

        {/* MISSION + VISION */}
        <div className="about-card-grid">
          <div className="about-card">
            <h4 className="card-title">⭐ Mission Statement</h4>
            <p className="card-text">
              BrightPath IT Academy & Learning Hub is committed to providing accessible, 
              practical, and industry-relevant IT education through structured training 
              programs and an interactive online learning platform. Our mission is to equip 
              learners with essential technical skills, hands-on experience, and professional 
              readiness to succeed in the evolving digital world.
            </p>
          </div>

          <div className="about-card">
            <h4 className="card-title">🚀 Vision Statement</h4>
            <p className="card-text">
              Our vision is to become a trusted IT learning hub that empowers students 
              and professionals with future-ready skills, supports lifelong learning, and 
              bridges the gap between education and industry through innovation, quality 
              training, and digital transformation.
            </p>
          </div>
        </div>

        {/* TEAM */}
        <div className="about-team">
          <h3 className="section-title team-title">Our Team</h3>

          <div className="team-grid">
            {/* ANUNITHA */}
            <div className="team-card stripe-yellow">
              <img src={anunithaImg} alt="Anunitha" className="team-image" />

              <h4 className="team-name">Anunitha</h4>
              <span className="team-role">
                Chief Learning Officer (CLO) & Founder
              </span>

              <p className="team-bio">
                Anunitha is the driving force behind BrightPath’s academic vision,
                shaping meaningful learning journeys and crafting
                industry-relevant programs that empower learners with practical,
                in-demand IT skills.
              </p>

              <p className="team-note">
                Leads the academic vision of BrightPath by designing
                industry-relevant learning paths and ensuring high-quality,
                practical IT training for all learners.
              </p>
            </div>

            {/* VENMADHI */}
            <div className="team-card stripe-blue">
              <img src={venmadhiImg} alt="Venmadhi" className="team-image" />

              <h4 className="team-name">Venmadhi</h4>
              <span className="team-role">
                Head of Digital Platform & Technology
              </span>

              <p className="team-bio">
                Venmadhi is the tech innovator behind BrightPath, building and
                maintaining a seamless digital learning platform that is fast,
                reliable, and user-friendly across all devices.
              </p>

              <p className="team-note">
                Oversees the development and performance of the online learning
                platform, ensuring a smooth, responsive, and user-friendly
                digital experience.
              </p>
            </div>

            {/* MENAKHA */}
            <div className="team-card stripe-purple">
              <img src={menakhaImg} alt="Menakha" className="team-image" />

              <h4 className="team-name">Menakha</h4>
              <span className="team-role">
                Learning Experience & Operations Manager
              </span>

              <p className="team-bio">
                Menakha is the detail-oriented backbone of BrightPath, ensuring
                every learning process runs smoothly while creating an engaging,
                well-structured environment where students feel supported.
              </p>

              <p className="team-note">
                Manages day-to-day learning operations and ensures an engaging,
                well-structured learning experience that supports student
                progress and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
