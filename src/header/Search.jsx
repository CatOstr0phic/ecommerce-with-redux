import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  return (
    <div
      className="max-h-[35px] flex-[7] 
      w-full border-2 border-blue-600
       rounded-md flex items-center overflow-hidden"
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "blue", width: "94%" }}
        placeholder="Search from 321 places"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <button className="p-2 px-4 bg-blue-600 text-white" >
        <SearchIcon  />
      </button>
    </div>
  );
}
