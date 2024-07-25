import React from "react";
import { useStateValue } from "../redux/StateProvider";
import { Card } from "@mui/material";
import Rating from "@mui/material/Rating";

export default function Cards({
  productName,
  productCost,
  id,
  productImg,
  type,
  product_star_rating,
}) {
  const [{ fav }, dispatch] = useStateValue();
  const [value, setValue] = React.useState(product_star_rating);

  console.log(fav);

  const removeFromBasket = () => {
    dispatch({
      type: type,
      id: id,
    });
  };
  return (
    <Card>
      <section
        id={id}
        className="m-1 border p-1 py-2 rounded-md text-[80%] flex gap-[10%]
      "
      >
        <div className="min-w-[120px] w-[200px] h-[140px] max-w-[25%]">
          <img src={productImg} className="w-100 h-100 object-contain" alt="" />
        </div>
        <div className="h-10">
          <div className="mt-3">{(productName.length < 100)
          ? productName
          : productName.substring(0, 80) + "..."}</div>
          <div>
            <Rating
            size="small"
              name="simple-controlled"
              value={value}
              precision={0.1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <div className="flex gap-2 items-center">
            <span className="font-bold text-lg">${productCost} </span>
            <span className="line-through text-zinc-600 ml-5 my-2 text-sm">
              122 3445
            </span>
          </div>
          <div className="p-1  text-center">
            <button
              onClick={removeFromBasket}
              className="w-100 p-1 rounded-md bg-[#383EF8] hover:bg-[#3616d0] text-white "
            >
              Remove from basket
            </button>
          </div>
        </div>
      </section>
    </Card>
  );
}
