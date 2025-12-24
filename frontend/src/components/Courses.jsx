import { useEffect, useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((response) => response.json())
      .then((result) => {
        setCourses(result);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h2>IT Training Courses</h2>
      <p>
        Our courses emphasise hands-on projects 🛠️ and certificate-based programs 📜.
      </p>

      {isLoading ? (
        <p>Loading courses...</p>
      ) : (
        <div className="grid">
          {courses.map((courseItem) => (
            <div className="card" key={courseItem.id}>
              <h3>{courseItem.title}</h3>

              <p>
                <strong>Level:</strong> {courseItem.level}
              </p>

              <p>
                <strong>Duration:</strong> {courseItem.duration}
              </p>

              <p>{courseItem.description}</p>

              {courseItem.features && (
                <ul>
                  {courseItem.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Courses;
