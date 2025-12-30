import { useEffect, useState } from "react";

function Team() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then(res => res.json())
      .then(data => setTeam(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Team</h1>
      {team.map(member => (
        <div key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.role}</p>
          <p>{member.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Team;
