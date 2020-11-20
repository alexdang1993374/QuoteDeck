import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar({setHome}) {
  return (
    <>
      <div className="navbarDiv">
        <div className="navButtonDiv">
          <NavLink to="/Spongebob">
            <button className="navButton" onClick={() => setHome(false)}>Spongebob</button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/Simpsons">
            <button className="navButton" onClick={() => setHome(false)}>The Simpsons</button>
          </NavLink>
        </div>
        <div className="navButtonDiv">
          <NavLink to="/Sunny">
            <button className="navButton" onClick={() => setHome(false)}>It's Always Sunny in Philadelphia</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}
