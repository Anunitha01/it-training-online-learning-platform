import { useEffect, useState } from "react";

function Team() {
  const [team, setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((response) => response.json())
      .then((result) => {
        setTeam(result);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section>
      <h2>Our Team</h2>

      {isLoading ? (
        <p>Loading team information...</p>
      ) : (
        <div className="grid">
          {team.map((memberItem) => (
            <div className="card" key={memberItem.id}>
              <h3>{memberItem.name}</h3>
              <p>
                <strong>{memberItem.role}</strong>
              </p>
              <p>{memberItem.bio}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Team;
