import React from "react";
import { useState } from "react";

const ToggleButton = ({ label1, label2 }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      <span
        className={`flex items-center text-sm font-medium text-[#6425fe] ${
          isChecked ? "opacity-60" : "opacity-100"
        }`}
      >
        {label1}
      </span>
      <span
        className={`mx-2 flex h-6 w-[40px] items-center rounded-full p-1 duration-200 ${
          isChecked ? "bg-[#2a106b]" : "bg-[#6425fe]"
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-[#f0e9ff] duration-200 ${
            isChecked ? "translate-x-[16px]" : ""
          }`}
        ></span>
      </span>
      <span
        className={`flex items-center text-sm font-medium text-[#2a106b] ${
          isChecked ? "opacity-100" : "opacity-60"
        }`}
      >
        {label2}
      </span>
    </label>
  );
};

export default ToggleButton;
