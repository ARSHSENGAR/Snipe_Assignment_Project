import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { menu1, menu2 } from "./constants/items";

const Item = ({ item }) => {
  return (
    <NavLink
      to={item.route}
      className={({ isActive }) => (isActive ? "active" : "inactive")}
    >
      <li className="item">
        <img src={item.img} alt={item.key} />
        <p>{item.title}</p>
      </li>
    </NavLink>
  );
};

const LeftSideBar = () => {
  return (
    <div className="sidebar">
      <div className="trademark">
        <img src={logo} alt="snipe.ai" className="logo" />
        <p className="phrase">
          <span className="title1">snipe.</span>
          <span className="title2">ai</span>
        </p>
      </div>
      <div className="nav">
        <ul>
          {menu1.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
        <ul>
          {menu2.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
