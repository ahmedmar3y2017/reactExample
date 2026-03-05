import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex items-center w-80 bg-white border border-gray-300 rounded-lg px-3 shadow-sm">
        <FaSearch className="text-gray-400 mr-2" />

        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
