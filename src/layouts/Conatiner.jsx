import React from "react";

export default function Conatiner({ children }) {
  return (
    <section className="w-full flex justify-center ">
      <div className="lg:px-[4%] max-w-[1600px] w-full ">
        <section className="bg-white px-3 py-2 h-full">{children}</section>
      </div>
    </section>
  );
}
