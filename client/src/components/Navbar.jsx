import React from "react";
import { NavLink } from "react-router-dom";

const pages = [
  { title: "Spongebob", id: "Spongebob" },
  { title: "The Simpsons", id: "Simpsons" },
  { title: "It's Always Sunny in Philadelphia", id: "Sunny" },
];

export default function NavBar({ setHome }) {
  return (
    <>
      <nav className="navbarDiv">
        <div className="navContainer">
          <div>
            <NavLink style={{ display: "flex", alignItems: "center" }} to="/">
              <p
                style={{
                  color: "white",
                  fontSize: "18px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                QuoteDeck
              </p>
            </NavLink>
          </div>

          <ul className="navList">
            {pages.map((page) => (
              <li
                key={page.title}
                className="navButton"
                onClick={() => setHome(false)}
              >
                <NavLink to={page.id}>{page.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
