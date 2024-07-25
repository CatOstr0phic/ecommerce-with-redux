// import React, { useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
// import axios from "axios";

export default function DiscountCards({
  deal_badge,
  id,
  deal_price_max,
  deal_price_min,
  deal_title,
  deal_photo,
  deal_state,
}) {
  // const [option, setOptions] = useState();
  // const options = {
  //   method: "GET",
  //   url: "https://real-time-amazon-data.p.rapidapi.com/product-details",

  //   params: {
  //     asin: "B07ZPKBL9V",
  //     country: "US",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "ce8ce51dcdmshbf7c3060234b5fcp1a1696jsn56337ece5dd2",
  //     "X-RapidAPI-Host": "real-time-amazon-data.p.rapidapi.com",
  //   },
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       setOptions(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <section
        key={id}
        id={id}
        className="relative m-1 border p-3 rounded-md
       bg-[#f5f5f5] cursor-pointer text-[80%] text-bottom flex flex-col justify-between"
      >
        <div className="w-full">
          <img
            src={deal_photo}
            className="w-full max-h-[150px] object-contain"
            alt=""
          />
          <span
            className="absolute top-0 right-0 shadow-zinc-800 bg-red-700 text-[#eee]
           p-1 shadow-lg px-4 rounded-bl-full rounded-tl-xl  font-bold"
          >
            {deal_badge}
          </span>
        </div>

        <div className="mt-2">
          <div className="text-md max-h-14">{deal_title}</div>
          <div className="flex gap-2 items-center">
            <span className="text-[14px] ">
              <small>from </small>
              <strong>{deal_price_max?.amount} </strong>
            </span>
            <span className="">
              <small>to </small>
              <strong>{deal_price_min?.amount}</strong>
            </span>
          </div>
        </div>

        <div className="w-100  flex-end">
          <ModalProduct
            deal_badge={deal_badge}
            id={id}
            deal_state={deal_state}
            deal_title={deal_title}
            deal_photo={deal_photo}
            deal_price_max={deal_price_max?.amount}
            min_amount={deal_price_min?.amount}
          />
        </div>
      </section>
    </>
  );
}
