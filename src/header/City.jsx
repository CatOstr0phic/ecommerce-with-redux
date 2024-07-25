import React, { useState } from "react";
import { AddLocation } from "@mui/icons-material";

const List = [
  { id: 1, option: "Oguz Han" },
  { id: 2, option: "Your place" },
];

export default function City() {
  const city = "Ashgabat";
  const [openCity, setOpenCity] = useState(false);
  const [displayedCity, setDisplayedCity] = useState(city);

  const handleCityClick = (value) => {
    setDisplayedCity(value);
  };

  return (
    <>
      <div
        onClick={() => setOpenCity(!openCity)}
        className="relative p-1 px-2 border rounded-md 
        cursor-pointer bg-blue-600 "
      >
        <button className="flex items-center text-white gap-2 ">
          <AddLocation />

          {displayedCity}
        </button>
        {openCity ? (
          <div
            className="absolute top-[0] shadow-md border
             min-w-[150px] left-[105%] -translate-y-1 
               bg-[white] border-1 rounded p-1 "
          >
            <>
              {List.map((option) => (
                <span
                  key={option.id}
                  className=" z-10 flex w-100 
                  border-b my-1 p-1 px-3
                     transition-colors"
                >
                  <button
                    onClick={() => handleCityClick(option.option)}
                    className="w-full h-full"
                  >
                    {option.option}
                  </button>
                </span>
              ))}
            </>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
