import { useState, useEffect } from "react";
import axios from "axios"; // Axios for API calls
import "../Style/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Fetch courses data from the backend (API)
  useEffect(() => {
  axios
    .get("https://it-training-online-learning-platform.onrender.com/courses")
    .then((response) => {
      setCourses(response.data);
    })
    .catch((error) => {
      console.error("Error fetching courses data:", error);
    });
}, []);
  // Filter courses based on search, category, and duration
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
      <button className="back-btn" onClick={() => window.history.back()}>
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

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select value={durationFilter} onChange={(e) => setDurationFilter(e.target.value)}>
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
              <p className="course-subtitle">{course.level} • {course.duration}</p>
            </div>

            <button className="course-enroll-btn" onClick={() => setShowPopup(true)}>
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
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <h2>🎉 Enrollment Successful!</h2>
            <p>You’ve been successfully enrolled.</p>
            <button className="popup-btn" onClick={() => setShowPopup(false)}>
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
