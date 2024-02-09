import React from "react";
import { NavLink } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import { menu3 } from "./constants/items";

const Item = ({ item }) => {
  return (
    <NavLink
      to={item.route}
      className={({ isActive }) => (isActive ? "sub_active" : "sub_inactive")}
    >
      <li className="sub_item">
        <p>{item.title}</p>
      </li>
    </NavLink>
  );
};

const SubTopSideBar = () => {
  return (
    <div className="topbar">
      <div className="header">
        <div className="heading">
          <h1>Contests</h1>
        </div>
        <div className="handle">
          <div className="mode">
            <ToggleButton label1="Development" label2="Production" />
          </div>
          <div className="notification">
            <img src="./assets/bell.png" alt="notification" />
          </div>
          <div className="user">
            <img src="./assets/user.png" alt="user" />
            <p>ROG-IO</p>
            <img src="./assets/arrow-down.png" alt="arrow-down" />
          </div>
        </div>
      </div>
      <div className="sub_nav">
        <ul>
          {menu3.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubTopSideBar;
