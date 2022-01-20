import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

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

  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="navbar">
        <ul
          className={openMenu ? "nav-list" : "nav-list  nav-menu"}
          onClick={() => setOpenMenu(false)}
        >
          {navbarItem.map((item) => {
            return (
              <li key={item.id} onClick={() => setOpenMenu(false)}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <div className="nav-search">
          <input type="text" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="menu" onClick={handleOpenMenu}>
          <MenuIcon style={{ color: "#fff", fontSize: "40px" }} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
