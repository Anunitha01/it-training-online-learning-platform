import "../Style/Home.css";
import { useState } from "react";

/* ===== ASSETS ===== */
import heroIllustration from "../assets/hero_illustration.png";
import laptopFrame from "../assets/laptop_home.png";
import aboutIllustration from "../assets/about.png";
import ipadFrame from "../assets/home_course_ipad.png";
import gridCourse from "../assets/grid_course.jpg";
import webCourse from "../assets/web_development_course.png";
import mobileCourse from "../assets/mobile_app_development_course.png";
import dataCourse from "../assets/data_science_and_analytics_course.png";
import cyberCourse from "../assets/cybersecurity_and_networking_course.png";
import team1 from "../assets/robot_1.png";
import team2 from "../assets/venmadhi.jpeg";
import team3 from "../assets/menakha.jpeg";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const courses = [
    { title: "Web & GUI Development", desc: "HTML, CSS, JavaScript, UI design, React fundamentals.", img: webCourse },
    { title: "Mobile App Development", desc: "Android & iOS UI, navigation, API integration.", img: mobileCourse },
    { title: "Data Science & Analytics", desc: "Data cleaning, dashboards, Python analytics tools.", img: dataCourse },
    { title: "Cybersecurity & Networking", desc: "Networking basics, security practices, threat awareness.", img: cyberCourse }
  ];

  const team = [
    { name: "ANUNITHA", role: "Chief Learning Officer (CLO) & Founder", bio: "Leads the academic vision of BrightPath by designing industry-relevant learning paths and ensuring high-quality, practical IT training for all learners. She ensures education stays aligned with real industry needs and future-ready skills.", img: team1 },
    { name: "VENMADHI", role: "Head of Digital Platform & Technology", bio: "Oversees the development and performance of the online learning platform, ensuring a smooth, responsive, and user-friendly digital experience. She drives innovation and platform scalability across BrightPath.", img: team2 },
    { name: "MENAKHA", role: "Learning Experience & Operations Manager", bio: "Manages day-to-day learning operations and ensures an engaging, well-structured learning experience that supports student progress and success. She focuses on learner satisfaction and operational excellence.", img: team3 }
  ];

  const nextCard = () => setActiveIndex((prev) => (prev + 1) % team.length);

  return (
    <div className="bp-ui">

      {/* ===== HERO ===== */}
      <section className="bp-hero" id="bp-hero">
        <div className="bp-container bp-hero-grid">
          <div className="bp-hero-left">
            <p className="bp-kicker">BrightPath IT Academy & Learning Hub</p>
            <h1 className="bp-title">
              <span className="bp-title-line">Your <span className="bp-highlight">Pathway</span> to</span><br/>
              <span className="bp-title-line">Practical <span className="bp-highlight">IT Skills</span></span>
            </h1>
            <p className="bp-sub">Learn industry-relevant skills through structured courses, guided learning paths, and hands-on projects built for real-world readiness.</p>

            <div className="bp-mini-cards">
              <div className="bp-mini"><strong>Dive Into Real Projects</strong><span>Hands-on Learning</span></div>
              <div className="bp-mini"><strong>Your Learning Path Awaits</strong><span>Guided Learning</span></div>
              <div className="bp-mini"><strong>Unlock Your Career Potential</strong><span>Support & Growth</span></div>
            </div>
          </div>

          <div className="bp-hero-right">
            <div className="bp-laptop">
              <img src={laptopFrame} alt="Laptop" className="bp-laptop-img"/>
              <div className="bp-laptop-screen">
                <img src={heroIllustration} alt="Learning Illustration" className="bp-laptop-content"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSES ===== */}
      <section className="bp-wave bp-paths" id="bp-paths">
        <div className="bp-container">
          <div className="bp-section-head">
            <h2 className="bp-section-title">Popular Learning Paths</h2>
            <p className="bp-section-sub">Industry-focused courses designed for real-world readiness.</p>
          </div>

          <div className="bp-cards-4">
            {courses.map((item, index) => (
              <div className="bp-path-card" key={index}>
                <img src={gridCourse} alt="" className="bp-card-grid"/>
                <div className="bp-ipad">
                  <img src={ipadFrame} alt="Course Preview" className="bp-ipad-frame"/>
                  <div className="bp-ipad-screen"><img src={item.img} alt={item.title}/></div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ===== VIEW MORE COURSES BUTTON ===== */}
          <div className="bp-view-more">
            <a href="/courses" className="bp-view-more-link">View More Courses →</a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="bp-wave bp-about" id="bp-about">
        <div className="bp-container">
          <div className="bp-section-head">
            <h2 className="bp-section-title">About Us</h2>
            <p className="bp-section-sub">Empowering the Next Generation of IT Professionals</p>
          </div>

          <div className="bp-about-top">
            <div className="bp-about-bg">
              <div className="bp-about-paint"></div>
              <div className="bp-about-text">
                <p><strong>BrightPath IT Academy & Learning Hub</strong> is an IT training and online learning platform focused on delivering practical, industry-relevant skills to students and aspiring IT professionals.</p>
                <p>Our platform offers structured courses, guided learning paths, and hands-on projects that prepare learners for real-world challenges. By combining technical training with professional development, BrightPath supports lifelong learning and career readiness in the rapidly evolving digital landscape.</p>
              </div>
            </div>
            <div className="bp-about-image">
              <img src={aboutIllustration} alt="About BrightPath"/>
            </div>
          </div>

          <div className="bp-about-divider-horizontal"/>

          <div className="bp-about-bottom">
            <div className="bp-about-box">
              <h3>Mission</h3>
              <p>BrightPath IT Academy & Learning Hub is committed to delivering accessible, practical, and industry-relevant IT education through structured training and an interactive online platform. Our mission is to equip learners with essential technical skills and hands-on experience, while providing free access to selected learning resources and courses for all users, supporting growth and readiness in the digital world.</p>
            </div>

            <div className="bp-about-divider-vertical"/>

            <div className="bp-about-box">
              <h3>Vision</h3>
              <p>Our vision is to become a trusted and inclusive IT learning hub that empowers learners with future-ready skills, supports lifelong learning, and bridges the gap between education and industry through quality training, innovation, and open access to knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="bp-wave bp-team" id="bp-team">
        <div className="bp-container">
          <div className="bp-section-head">
            <h2 className="bp-section-title">Meet Our Team</h2>
            <p className="bp-section-sub">Learn from industry experts committed to your success.</p>
          </div>

          <div className="bp-team-carousel">
            <div className="bp-team-stage">
              {team.map((member, index) => {
                const isActive = index === activeIndex;
                const isNext = index === (activeIndex + 1) % team.length;
                const isPrev = index === (activeIndex - 1 + team.length) % team.length;

                return (
                  <div key={index} className={`bp-team-card ${isActive ? "active" : ""} ${isNext ? "next" : ""} ${isPrev ? "prev" : ""}`} onClick={isActive ? nextCard : undefined}>
                    <img src={member.img} alt={member.name} className="bp-avatar-large"/>
                    <h4 className="bp-team-name">{member.name}</h4>
                    <p className="bp-team-role">{member.role}</p>
                    <p className="bp-team-bio">{member.bio}</p>
                    <span className="bp-team-tagline">Learn from industry experts committed to your success.</span>
                  </div>
                );
              })}
            </div>

            <div className="bp-team-dots">
              {team.map((_, i) => (
                <span key={i} className={`bp-dot ${i === activeIndex ? "active" : ""}`} onClick={() => setActiveIndex(i)}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bp-wave bp-faq" id="bp-faq">
        <div className="bp-container">
          <div className="bp-section-head">
            <h2 className="bp-section-title">Need Help?</h2>
            <p className="bp-section-sub">Questions about courses, learning paths, or how BrightPath works?</p>
          </div>

          <div className="bp-faq-box">
            <p className="bp-faq-text">We’ve answered the most common questions to help you get started. If you’re looking for more details or personalised guidance, our team is always happy to help.</p>

            <div className="bp-faq-actions">
              <a href="/faq" className="bp-faq-link">Visit FAQs →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
