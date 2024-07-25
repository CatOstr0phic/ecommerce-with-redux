import React from "react";

export default function ItemBtn({ icon, iconName }) {
  return (
    <div className="grid text-zinc-500 text-center 
    hover:text-blue-600 ">
      <span>{icon}</span>

      <span style={{ fontSize: "12px" }}>{iconName}</span>
    </div>
  );
}
