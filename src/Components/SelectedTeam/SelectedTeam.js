import React from "react";
import "./SelectedTeam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleArrows } from "@fortawesome/free-solid-svg-icons";
const SelectedTeam = (props) => {
  //console.log(props);
  const peopleIcon = <FontAwesomeIcon icon={faPeopleArrows} />;
  const { cart } = props;
  //filter to  unique object in   a array .so that one member are not added in multiple time .
  let uniqIds = {};
  let filtered = cart.filter(
    (obj) => !uniqIds[obj._id] && (uniqIds[obj._id] = true)
  );
  console.log(filtered);

  //  Total price uses reduce function
  const total = filtered.reduce(
    (previous, property) => previous + property.salary,
    0
  );
  return (
    <div>
      <h5 className="my-2 p-2">
        {peopleIcon} Number of Club Members: {filtered.length}
      </h5>
      <p className="">Total Cost: $ {total}</p>
      {/* map array cart  to find indivijual item object*/}
      {filtered.map((name) => (
        // display the selected member info
        <div
          key={name._id}
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
