import React from "react";
import SelectedTeam from "../SelectedTeam/SelectedTeam";
import "./TeamMember.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faTrophy,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const TeamMember = (props) => {
  // React fontawesome ICON
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />;
  const achiveIcon = <FontAwesomeIcon icon={faTrophy} />;
  const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
  // Destructure
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
        <h6 className="my-2 py-2">{about}</h6>
        <h5 className="color my-2">
          {achiveIcon} {achievements}
        </h5>
        <h6 className="text-color fw-bolder my-3 p-2 ">
          {phoneIcon} <span>{phone}</span>
        </h6>
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
            {cartIcon} Select Member
          </button>
        </div>
      </div>
    </>
  );
};

export default TeamMember;
