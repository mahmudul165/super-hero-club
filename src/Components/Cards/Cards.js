import React, { useEffect, useState } from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import TeamMember from "../TeamMember/TeamMember";
import "./Cards.css";
const Cards = () => {
  const [teams, setTeam] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = `./developers.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  const handleAddToCard = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };

  return (
    <>
      <section className="  main-container   ">
        {/* <h3>Choose Super Club Member:</h3> */}
        <div className="members">
          {teams.map((member) => (
            <TeamMember
              key={member._id}
              member={member}
              handleAddToCard={handleAddToCard}
            ></TeamMember>
          ))}
        </div>
        <div className="developer-team  ">
          <SelectedTeam cart={cart}></SelectedTeam>
        </div>
      </section>
    </>
  );
};

export default Cards;
