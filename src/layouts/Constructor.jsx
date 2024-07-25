import React from "react";
import { Link } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useStateValue } from "../redux/StateProvider";

export default function Constructor({ children, constructorName }) {

  // eslint-disable-next-line no-unused-vars
  const [{name}, dispatch] = useStateValue();
  const getName = (e) => {
    dispatch({
      type: "GET_NAME",
      item: constructorName
    });
  };

  return (
    <>
      <div className="text-[#242424] font-semibold 
      flex w-100 justify-between text-center">
        <Link onClick={getName} to="/categories-list">
          <h3>{constructorName} </h3>
        </Link>
        <button className="bg-[#363ef8] text-white 
        px-2 p-1 rounded-md  transform -rotate-90">
          <KeyboardArrowDown />
        </button>
      </div>
      <ul className="grid relative grid-cols-4 py-4">{children}</ul>
    </>
  );
}
