import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Categories({ modalOpen }) {
  const [categories, setCategories] = useState([]);

  const options = {
    method: "GET",
    url: "http://localhost:3000/data",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.category);
        setCategories(response.data.category);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className={`fixed top-[60px] h-100 -mx-4  bg-white   
        transition-width ease transform duration-300 ${
          !modalOpen ? "w-[0px]" : "w-[300px]"
        }`}
      >
        <ul className="p-3 grid h-100 overflow-scroll">
          {categories.map((category) => (
            <li
              key={category.key}
              id={category.id}
              className="py-[12px] px-2 text-[14px]
             hover:border-l-4 hover:border-l-blue-600 
             hover:bg-[#f5f5f5] rounded-md"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
