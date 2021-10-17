import React, { useEffect, useState } from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import TeamMember from "../TeamMember/TeamMember";
import "./Cards.css";
const Cards = () => {
  const [teams, setTeam] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const url = `./clubmember.json`;
    // load data from json
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);
  //function for onclick event
  const handleAddToCard = (member) => {
    const newCart = [...cart, member];
    setCart(newCart);
  };

  return (
    <>
      <h3 className="pt-2 my-2 ms-3 text-primary">Choose Club Member:</h3>
      <section className="main-container ">
        {/*  ALL MEMBER INFO */}
        <div className="members">
          {teams.map((member) => (
            <TeamMember
              key={member._id}
              member={member}
              handleAddToCard={handleAddToCard}
            ></TeamMember>
          ))}
        </div>
        {/* ANOTHER FOR SELECTED  CLUB MEMBERS INFORMATION  */}
        <div className="club-members-info ">
          <SelectedTeam cart={cart}></SelectedTeam>
        </div>
      </section>
    </>
  );
};

export default Cards;
