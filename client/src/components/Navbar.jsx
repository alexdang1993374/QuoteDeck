import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { close, menu } from "../assets";
import { useActive } from "../context";
import "./Navbar.css";

const pages = [
  { title: "Spongebob", id: "Spongebob" },
  { title: "The Simpsons", id: "Simpsons" },
  { title: "IASIP", id: "Sunny" },
];

export default function NavBar() {
  const { active, setActive } = useActive();
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`paddingX w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-18px font-bold cursor-pointer flex">
            QuoteDeck &nbsp;
          </p>
        </NavLink>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {pages.map((page) => (
            <li
              key={page.id}
              className={`${
                active === page.title ? "text-white" : "text-secondary"
              } hover:text-white text-18px font-medium cursor-pointer`}
              onClick={() => setActive(page.title)}
            >
              <NavLink to={`${page.id}`}>{page.title}</NavLink>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-28px h-28px object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-140px z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {pages.map((page) => (
                <li
                  key={page.id}
                  className={`${
                    active === page.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-16px`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(page.title);
                  }}
                >
                  <NavLink to={`${page.id}`}>{page.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
