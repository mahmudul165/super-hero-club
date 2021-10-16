import React from "react";

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
    <div>
      <h3>{name}</h3>
      <h6>{expertice}</h6>
      <p>{about}</p>
      <p>{address}</p>
      <button>Select Member</button>
    </div>
  );
};

export default TeamMember;
