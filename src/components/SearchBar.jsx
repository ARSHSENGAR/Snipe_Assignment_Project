import React from "react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <img src="../assets/search.png" alt="search" className="w-6 h-6" />
      </div>
      <input
        type="search"
        id="search"
        className="block w-[300px] p-2 ps-10 text-sm text-[#798f9f]/60 border border-[#6425fe]/40 rounded-sm bg-[#f0e9ff]/60 focus:outline-none"
        placeholder="- search in Contests -"
        onChange={handleSearch}
        required
      />
    </div>
  );
};

export default SearchBar;
