import React, { useState } from "react";
import { useStateValue } from "../redux/StateProvider";

import {
  FavoriteBorder,
  Favorite,
  Compare,
  AddShoppingCart,
} from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CombareCards({
  productName,
  productCost,
  id,
  productImg,
  nums,
  product_star_rating,
}) {
  // eslint-disable-next-line no-unused-vars
  const [{ fav }, dispatch] = useStateValue();
  const [value, setValue] = React.useState(product_star_rating);
  const [click, setClick] = useState(false);

  const addToFav = (e) => {
    dispatch({
      type: "FAVORITES",
      item: {
        id: id,
        productName: productName,
        productCost: productCost,
        productImg: productImg,
        nums: nums,
        product_star_rating: product_star_rating,
      },
    });
    setClick(!click);
  };

  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        productName: productName,
        productCost: productCost,
        productImg: productImg,
        nums: nums,
        product_star_rating: product_star_rating,
      },
    });
    setClick(!click);
  };

  return (
    <section
      id={id}
      className="relative m-1 border p-3  
      rounded-md cursor-pointer"
    >
      <div className="flex flex-col absolute right-2 top-2">
        <button onClick={addToFav} type="ADD_TO_BASKET">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </button>
        <button onClick={addToBasket}>
          <Checkbox
            {...label}
            icon={<AddShoppingCart />}
            checkedIcon={<AddShoppingCart />}
          />
        </button>
      </div>
      <div className="w-100">
        <img
          src={productImg}
          alt=""
          className="w-full h-[140px] object-contain "
        />
      </div>

      <h3 id="title" className="text-[12px] mt-3 min-h-[36px] h-11">
        {(productName.length < 100)
          ? productName
          : productName.substring(0, 110) + "..."}
      </h3>
      <div className="font-bold relative">
        <span className="font-semibold text-lg mb-3"> ${productCost}</span>
        <span className="line-through text-zinc-600 ml-5 my-2 text-sm">
          122 3445
        </span>
      </div>
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <div className="flex gap-2 ">
        <span
          className="p-1 rounded-md px-2
          bg-[#383EF8] hover:bg-[#3616d0] text-white"
        >
          {nums}
        </span>
        <button
          className="w-full p-1 rounded-md px-2
          bg-[#383EF8] hover:bg-[#3616d0] text-white"
        >
          <Compare fontSize="small" />
        </button>
      </div>
    </section>
  );
}
