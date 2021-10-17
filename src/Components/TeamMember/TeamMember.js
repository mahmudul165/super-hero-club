import React from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import "./TeamMember.css";

const TeamMember = (props) => {
  const {
    picture,
    salary,
    phone,
    name,
    expertice,
    language,
    age,
    address,
    about,
    achievements,
    email,
  } = props.member;

  return (
    <>
      <div className="member-container  single-member">
        <img
          className="img"
          width="150px"
          height="150px"
          src={picture}
          alt=""
        />
        <h2 className="text-success">{name}</h2>
        <h6>{about}</h6>
        <h6 className="color my-2">Achievements : {achievements}</h6>
        <h6 className="text-color fw-bolder my-3 p-2 ">{phone}</h6>
        <div
          className="d-flex align-items-center
        justify-content-around text-color fw-bolder my-3"
        >
          <p>{email}</p>
          <p>Age: {age}</p>
        </div>

        <div
          className="d-flex align-items-center
        justify-content-around    "
        >
          <h5 className="color fw-bolder  ">$ {salary}</h5>
          <button
            className="btn btn-primary   "
            onClick={() => {
              props.handleAddToCard(props.member);
            }}
          >
            Select Member
          </button>
        </div>
      </div>

      {/* <div className="developer-team">
        <SelectedTeam member={member}></SelectedTeam>
      </div> */}
    </>
  );
};

export default TeamMember;
