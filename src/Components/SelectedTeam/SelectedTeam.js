import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
const SelectedTeam = (props) => {
  const peopleIcon = <FontAwesomeIcon icon={faPeopleArrows} />;
  const { cart } = props;

  const total = cart.reduce(
    (previous, property) => previous + property.salary,
    0
  );
  return (
    <div>
      <h5 className="my-2 p-2">
        {peopleIcon} Number of Club Members: {props.cart.length}
      </h5>
      <p className="">Total Cost: $ {total}</p>
      {cart.map((name) => (
        <div
          className="d-flex align-items-center
        justify-content-around  p-1 mx-1 my-3 text-success bg-white rounded text-center"
        >
          <h6>{name.name}</h6>
          <img
            className="img"
            width="80px"
            height="80px"
            src={name.picture}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedTeam;
