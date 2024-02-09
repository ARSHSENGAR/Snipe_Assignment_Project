import React from "react";
import Table from "../../components/Table";

const ManageContests = () => {
  return (
    <div className="sub_header">
      <div className="sub_heading">
        <h1>List of Contests</h1>
      </div>
      <div className="content">
        <Table />
      </div>
    </div>
  );
};

export default ManageContests;
