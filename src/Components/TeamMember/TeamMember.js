import React from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";

const TeamMember = (props) => {
  const {
    picture,
    balance,
    phone,
    name,
    expertice,
    language,
    age,
    address,
    about,
  } = props.member;

  return (
    <>
      <div className="member-container">
        <h3>{name}</h3>
        <h6>{expertice}</h6>
        <p>{about}</p>
        <p>{address}</p>
        <button
          onClick={() => {
            props.handleAddToCard(props.member);
          }}
        >
          Select Member
        </button>
      </div>

      {/* <div className="developer-team">
        <SelectedTeam member={member}></SelectedTeam>
      </div> */}
    </>
  );
};

export default TeamMember;
