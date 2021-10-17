import React, { useEffect, useState } from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import TeamMember from "../TeamMember/TeamMember";
import "./Cards.css";
const Cards = () => {
  const [teams, setTeam] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = `./clubmember.json`;
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
      <h3 className="pt-2 my-2 ms-3 text-primary">Choose Club Member:</h3>
      <section className="main-container ">
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
