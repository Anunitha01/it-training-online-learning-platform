import { useState } from "react";
import "../Style/Courses.css";

function Courses() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Hardcoded courses data (replaces backend call)
  const courses = [
    {
      id: 1,
      title: "PixelCraft: Web Design & GUI Mastery",
      category: "Beginner",
      level: "Beginner to Intermediate",
      duration: "4–6 weeks",
      features: [
        "Responsive websites (HTML, CSS, JavaScript)",
        "UI design basics (layouts, forms, components)",
        "React fundamentals with mini project",
        "Certificate and portfolio guidance"
      ]
    },
    {
      id: 2,
      title: "AppForge: Mobile Development Essentials",
      category: "Intermediate",
      level: "Intermediate",
      duration: "6–8 weeks",
      features: [
        "Build Android & iOS-style apps",
        "UI screens and navigation",
        "Connect basic APIs",
        "Final app project with certificate"
      ]
    },
    {
      id: 3,
      title: "DataMinds: Analytics & Insights Lab",
      category: "Beginner",
      level: "Beginner to Intermediate",
      duration: "6–8 weeks",
      features: [
        "Data cleaning and basic analysis",
        "Charts and dashboards",
        "Introduction to Python tools",
        "Mini project using real datasets"
      ]
    },
    {
      id: 4,
      title: "CyberSentinel: Network & Security Academy",
      category: "Intermediate",
      level: "Intermediate",
      duration: "6–8 weeks",
      features: [
        "Networking fundamentals (IP, DNS, routing)",
        "Cybersecurity concepts and threat types",
        "Basic security tools and safe practices",
        "Hands-on labs with certificate"
      ]
    },
    {
      id: 5,
      title: "CloudOps: DevOps & Cloud Mastery",
      category: "Advanced",
      level: "Intermediate to Advanced",
      duration: "6–8 weeks",
      features: [
        "Cloud deployment fundamentals",
        "CI/CD overview and automation basics",
        "Docker introduction and pipelines",
        "Final deployment project with certificate"
      ]
    },
    {
      id: 6,
      title: "AIMinds: AI & ML Fundamentals",
      category: "Intermediate",
      level: "Intermediate",
      duration: "6–8 weeks",
      features: [
        "AI and machine learning workflow",
        "Classification and regression concepts",
        "Basic model training and evaluation",
        "Mini AI project with certificate"
      ]
    },
    {
      id: 7,
      title: "CareerLift: Professional & Career Development",
      category: "Beginner",
      level: "All Learners",
      duration: "2–4 weeks",
      features: [
        "Resume and LinkedIn improvement",
        "Interview questions and mock practice",
        "Communication and teamwork skills",
        "Career roadmap and guidance"
      ]
    },
    {
      id: 8,
      title: "CodeStart: Programming Fundamentals",
      category: "Beginner",
      level: "Complete Beginners",
      duration: "4–6 weeks",
      features: [
        "Logic, variables, loops, and functions",
        "Problem-solving from easy to medium",
        "Weekly coding exercises",
        "Beginner project with certificate"
      ]
    },
    {
      id: 9,
      title: "TestPro: Software Testing & QA Lab",
      category: "Intermediate",
      level: "Beginner to Intermediate",
      duration: "4–6 weeks",
      features: [
        "Manual testing and test case writing",
        "Bug reporting (Jira-style)",
        "Automation testing concepts",
        "Testing mini project with certificate"
      ]
    }
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      !categoryFilter || course.category?.toLowerCase() === categoryFilter.toLowerCase();

    const matchesDuration =
      !durationFilter || course.duration === durationFilter;

    return matchesSearch && matchesCategory && matchesDuration;
  });

  return (
    <div className="courses-container">
      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => window.history.back()}
      >
        ← Back
      </button>

      <h1 className="courses-heading">Explore Our Learning Paths</h1>

      {/* FILTERS */}
      <div className="courses-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          value={durationFilter}
          onChange={(e) => setDurationFilter(e.target.value)}
        >
          <option value="">All Durations</option>
          <option value="2–4 weeks">2–4 weeks</option>
          <option value="4–6 weeks">4–6 weeks</option>
          <option value="6–8 weeks">6–8 weeks</option>
        </select>
      </div>

      {/* COURSE CARDS */}
      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-header">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-subtitle">
                {course.level} • {course.duration}
              </p>
            </div>

            <button
              className="course-enroll-btn"
              onClick={() => setShowPopup(true)}
            >
              Enroll Now
            </button>

            {course.features?.length > 0 && (
              <div className="course-features">
                <p className="features-title">What you get:</p>
                <ul>
                  {course.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* POPUP */}
      {showPopup && (
        <div
          className="popup-overlay"
          onClick={() => setShowPopup(false)}
        >
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>🎉 Enrollment Successful!</h2>
            <p>You’ve been successfully enrolled.</p>
            <button
              className="popup-btn"
              onClick={() => setShowPopup(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
