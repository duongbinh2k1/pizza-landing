import React from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const navbarItem = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Menu",
    },
    {
      id: 3,
      name: "Our Story",
    },
    {
      id: 4,
      name: "Contact us",
    },
  ];

  return (
    <>
      <div className="navbar">
        <ul className="nav-list">
          {navbarItem.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
        <div className="nav-search">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
