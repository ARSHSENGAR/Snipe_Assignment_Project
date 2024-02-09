import React from "react";

const AlterButtons = ({ handleDelete }) => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        className="flex items-center gap-2 text-white bg-[#00a053] hover:bg-[#00a053]/80 font-small rounded-md text-sm px-2 py-1 me-1 mb-1 focus:outline-none"
      >
        Modify
        <img src="../assets/edit.png" alt="edit" className="w-4 h-4" />
      </button>
      <button
        type="button"
        onClick={handleDelete}
        className="flex items-center gap-2 text-white bg-[#db6757] hover:bg-[#db6757]/80 font-small rounded-md text-sm px-2 py-1 me-1 mb-1 focus:outline-none"
      >
        Delete
        <img src="../assets/cross.png" alt="cross" className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AlterButtons;
