import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchesLevel =
      levelFilter === "" || course.level.toLowerCase().includes(levelFilter.toLowerCase());

    const matchesDuration =
      durationFilter === "" || course.duration === durationFilter;

    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase());

    return matchesLevel && matchesDuration && matchesSearch;
  });

  const isFreeTrial = (level) => {
    return (
      level.toLowerCase().includes("beginner") ||
      level.toLowerCase().includes("complete")
    );
  };

  const handleEnroll = (course) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login to continue");
      return;
    }

    if (isFreeTrial(course.level)) {
      alert(`🎉 You have started a FREE TRIAL for ${course.title}`);
    } else {
      alert(`💳 Payment required to enroll in ${course.title}`);
    }
  };

  return (
    <div className="courses-container">
      <h1 className="courses-heading">Kickstart Your Learning Journey</h1>

      {/* CONTROLS */}
      <div className="courses-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
          <option value="">All Levels</option>
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

      {/* COURSES */}
      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-content">
              <h2>{course.title}</h2>
              <p><strong>Level:</strong> {course.level}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p>
                <strong>Access:</strong>{" "}
                {isFreeTrial(course.level) ? (
                  <span className="free-badge">Free Trial</span>
                ) : (
                  <span className="paid-badge">{course.price}</span>
                )}
              </p>
            </div>

            <div className="course-actions">
              <button
                className="features-btn"
                onClick={() => setSelectedCourse(course)}
              >
                View Features
              </button>

              <button
                className={isFreeTrial(course.level) ? "free-trial-btn" : "enroll-btn"}
                onClick={() => handleEnroll(course)}
              >
                {isFreeTrial(course.level) ? "Start Free Trial" : "Enroll Now"}
              </button>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <p className="no-results">No courses found.</p>
        )}
      </div>

      {/* MODAL */}
      {selectedCourse && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCourse.title}</h2>
            <ul>
              {selectedCourse.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className="close-btn"
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
