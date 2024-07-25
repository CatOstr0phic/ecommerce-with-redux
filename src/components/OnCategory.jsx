import React from "react";

export default function OnCategory({ children, category }) {
  return (
    <section className="">
      <h1 className="text-4xl my-3 font-bold">{category}</h1>
      <div className="flex gap-2 flex-wrap my-3">{children}</div>
    </section>
  );
}
