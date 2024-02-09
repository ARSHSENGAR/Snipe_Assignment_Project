import React from "react";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter_range">
        <p>Yearly</p>
        <img src="../assets/half-arrow-down.png" alt="half-arrow-down" />
        <div>
          <p>20 Jan 2022 → 20 Jul 2023</p>
        </div>
      </div>
      <div className="filter_btn">
        <img src="../assets/filter.png" alt="filter" />
      </div>
    </div>
  );
};

export default Filter;
