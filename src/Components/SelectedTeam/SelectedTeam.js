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
      <h5>Number of Team Members: {props.cart.length}</h5>
      <p>Total Cost: $ {total}</p>
      {cart.map((name) => (
        <h4>
          <span>{name.picture} </span>
          {name.name}
        </h4>
      ))}
    </div>
  );
};

export default SelectedTeam;
