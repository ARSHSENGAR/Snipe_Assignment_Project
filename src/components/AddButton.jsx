import React from "react";

const AddButton = () => {
  return (
    <div className="relative">
      <button
        type="button"
        className="text-white bg-[#6425fe] hover:bg-[#2a106b] font-small rounded-md text-sm px-4 py-2 me-2 mb-2 focus:outline-none"
      >
        Add a new Contest +
      </button>
    </div>
  );
};

export default AddButton;
