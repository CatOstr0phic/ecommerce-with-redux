import React from "react";

export default function AdaptiveCathegries({ imgUrl, name, id }) {
  return (
    <li
      id={id}
      className="grid place-items-center hover:border hover:shadow-md
     rounded-md p-5 cursor-pointer"
    >
      <img
        src={imgUrl}
        className="h-auto w-auto left-[50%] object-contain"
        alt=""
      />
      <div className="mt-3">{name}</div>
    </li>
  );
}
