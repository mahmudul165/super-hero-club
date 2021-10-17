import React from "react";

const SelectedTeam = (props) => {
  // console.log(props);
  const { cart } = props;

  const total = cart.reduce(
    (previous, property) => previous + property.salary,
    0
  );
  return (
    <div>
      <h5 className="my-2 p-2">Number of Team Members: {props.cart.length}</h5>
      <p className="">Total Cost: $ {total}</p>
      {cart.map((name) => (
        <div
          className="d-flex align-items-center
        justify-content-around  p-1 mx-1 my-1 text-success bg-white rounded text-center"
        >
          <h4>{name.name}</h4>
          <img
            className="img"
            width="100px"
            height="100px"
            src={name.picture}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default SelectedTeam;
