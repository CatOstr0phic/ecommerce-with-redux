import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useState } from "react";

const populars = [
  {
    id: 1,
    name: "Iphone11",
  },
  {
    id: 2,
    name: "Iphone12",
  },
  {
    id: 3,
    name: "Iphone15",
  },
  {
    id: 8,
    name: "Iphone14",
  },

  {
    id: 5,
    name: "Apple Watch",
  },
  {
    id: 6,
    name: "Jewelerly",
  },
  {
    id: 7,
    name: "Music",
  },
  {
    id: 8,
    name: "Samsung Galaxy Z Fold",
  },
  {
    id: 9,
    name: "Samsung Galaxy Z Ultra Fold",
  },
  {
    id: 11,
    name: "Channel 5",
  },
  {
    id: 12,
    name: "Arcane",
  },
  {
    id: 13,
    name: "DvD and CD",
  },

  { id: 14, name: "Think Pad" },
  { id: 15, name: "Matrix solver" },
  { id: 16, name: "Problem Solver book" },
  { id: 17, name: "Samsung A22 4g" },
  { id: 18, name: "Ultra fast sneakers" },
  { id: 19, name: "Whatever" },
];

export default function Populars() {
  const [showAll, setShowAll] = useState(true);

  return (
    <section className="flex w-100 justify-between py-2">
      <div
        className="px-3 py-1 rounded-md 
      bg-[#ddd9d9ae] text-[#86878f] 
      text-[80%] h-fit mr-5 cursor-pointer"
      >
        Polpulars
      </div>
      <div
        className={`w-100 flex flex-wrap gap-1 ${
          showAll ? "h-8 overflow-hidden first-letter:" : ""
        }`}
      >
        {populars.map((popular) => (
          <div
            id={popular.id}
            className="bg-[#ddd9d9ae] cursor-pointer text-[80%]
             hover:text-[#8319a6] text-[#363Ef8] px-2 py-1.5"
          >
            {popular.name}
          </div>
        ))}
      </div>
      <div className="align-right ">
        <button
          className="bg-[#363Ef8] rounded-md
         hover:bg-[#3616d0] p-1"
          onClick={() => setShowAll(!showAll)}
        >
          <KeyboardArrowDown />
        </button>
      </div>
    </section>
  );
}
