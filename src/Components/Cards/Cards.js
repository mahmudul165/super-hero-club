import React, { useEffect, useState } from "react";
import TeamMember from "../TeamMember/TeamMember";

const Cards = () => {
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    const url = `./developers.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  return (
    <div>
      <h3>********from card***********</h3>
      {teams.map((member) => (
        <TeamMember key={member._id} member={member}></TeamMember>
      ))}
    </div>
  );
};

export default Cards;
