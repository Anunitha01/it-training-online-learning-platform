import { useEffect, useState } from "react";
import axios from "axios";
import "./Courses.css"; // create this CSS file for styling

function Courses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [levelFilter, setLevelFilter] = useState("");

  // Fetch courses from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filter and search courses
  const filteredCourses = courses.filter(
    (course) =>
      (levelFilter === "" || course.level.includes(levelFilter)) &&
      course.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle enroll
  const handleEnroll = (courseTitle) => {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login to enroll");
    alert(`You have enrolled in ${courseTitle}!`);
    // Later: send POST to backend to save enrollment
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>

      {/* Search & Filter */}
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

      {/* Courses List */}
      <div className="courses-list">
        {filteredCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>
              <strong>Level:</strong> {course.level} | <strong>Price:</strong> {course.price}
            </p>
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>

            <button
              onClick={() => alert(course.features.join("\n"))}
              className="features-btn"
            >
              View Features
            </button>

            <button onClick={() => handleEnroll(course.title)} className="enroll-btn">
              Enroll
            </button>
          </div>
        ))}

        {filteredCourses.length === 0 && <p>No courses found.</p>}
      </div>
    </div>
  );
}

export default Courses;



