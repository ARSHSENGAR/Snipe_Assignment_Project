import React from "react";
import { Outlet } from "react-router-dom";
import SubTopSideBar from "../components/SubTopSideBar";

const Contests = () => {
  return (
    <div className="page">
      <div>
        <SubTopSideBar />
      </div>
      <div className="sub_page">
        <Outlet />
      </div>
    </div>
  );
};

export default Contests;
