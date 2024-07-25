import React from "react";
import { Dehaze } from "@mui/icons-material";

export default function CategoriesBtn({toggleHandler}) {

  return (
      <button
        style={{
          padding: "3px 6px 3px 6px ",
          backgroundColor: "blue",
          borderRadius: "15px",
          color: "white",
          display: "flex",
          gap: "5px",
          alignItems: "center",
          cursor: "pointer"
        }}
        onClick={toggleHandler}
      >
        <span>
          <Dehaze />
        </span> 
        <span>Categories</span>
      </button>

  );
}
