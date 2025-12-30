import { useEffect, useState } from "react";
import axios from "axios";
import "../style/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      (levelFilter === "" || course.level.includes(levelFilter)) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleEnroll = (courseTitle) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to enroll");
    alert(`You have enrolled in ${courseTitle}!`);
  };

  return (
    <div className="courses-container">
      <h1 className="courses-heading">Courses</h1>

      <div className="courses-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setLevelFilter(e.target.value)} value={levelFilter}>
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="course-content">
              <h2>{course.title}</h2>
              <p><span className="label">Level:</span> {course.level}</p>
              <p><span className="label">Price:</span> {course.price}</p>
              <p><span className="label">Duration:</span> {course.duration}</p>
            </div>

            <div className="course-actions">
              <button onClick={() => setSelectedCourse(course)} className="features-btn">
                View Features
              </button>
              <button onClick={() => handleEnroll(course.title)} className="enroll-btn">
                Enroll
              </button>
            </div>
          </div>
        ))}

        {filteredCourses.length === 0 && <p>No courses found.</p>}
      </div>

      {selectedCourse && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedCourse.title} – What You Get</h2>
            <ul>
              {selectedCourse.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedCourse(null)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
