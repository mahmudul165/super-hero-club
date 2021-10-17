import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container-fluid bg-primary text-white text-center p-2 ">
        <h1>Create Super Programming Club</h1>
        <hr
          className=" w-75  m-auto
         "
        />
        <p className="p-2 color">
          Programming is the challenging and fasssionate work in the world
        </p>

        <h3 className="p-2 color">
          Total Budget: <span>1000 Million</span>
        </h3>
      </div>
    </>
  );
};

export default Header;
