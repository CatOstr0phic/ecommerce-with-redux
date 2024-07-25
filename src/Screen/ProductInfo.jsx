import React, { useEffect, useState } from "react";
import Conatiner from "../layouts/Conatiner";
import Breadcrumb from "../components/Breadcrumb";
import { Rating } from "@mui/material";
import axios from "axios";
import {
  FavoriteBorder,
  Compare,
  AddShoppingCart,
} from "@mui/icons-material";

export default function ProductInfo() {
  const [product, setProduct] = useState([]);

  const [productReview, setProductReview] = useState({});
  const [productDetails, setProductDetails] = useState({});
  const [productPhotos, setProductPhotos] = useState("");
  const options = {
    method: "GET",
    url: "http://localhost:3000/data",
    header: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
  console.log(productReview);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data.review_product.product_information);
        setProductReview(response.data.review_product.product_information);
        setProductDetails(response.data.review_product.product_details);
        setProduct(response.data.review_product);
        setProductPhotos(response.data.review_product.product_photos);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Conatiner>
      <Breadcrumb />
      {/* first */}
      <div className="grid grid-cols-11 w-100 ">
        <div className="col-span-11 flex items-center justify-between border-b w-100 mb-2">
          <div>
            <h3>{product.product_title}</h3>
            <h1>
              {product.product_price} {product.currency}
            </h1>
          </div>
          <div className="text-sm text-[#2563EB]">
            <button className="ml-4">
              <FavoriteBorder fontSize="small" sx={{ marginRight: "8px" }} />
              Like
            </button>
            <button className="ml-4">
              {" "}
              <Compare fontSize="small" sx={{ marginRight: "8px" }} />
              Compare
            </button>
            <button className="ml-4">
              {" "}
              <AddShoppingCart fontSize="small" sx={{ marginRight: "8px" }} />
              Compare
            </button>
          </div>
        </div>
        <div className="col-span-3 flex h-fit">
          {" "}
          <div className="w-[25%]   z-1">
            {Object.entries(productPhotos).map((value) => (
              <div className="w-100 h-14 m-1">
                <img
                  src={value}
                  className="w-100 h-100 object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="w-100 w-fit ">
            <img
              src={product.product_photo}
              className="w-100 h-[100%] object-contain"
              alt="upssee smth went wrong..."
            />
          </div>
        </div>
        <div className="col-span-5 col-start-4 p-2">
          <strong>About Product:</strong>
          {Object.entries(productDetails).map(([key, value]) => (
            <div key={key} className="text-xs  my-2 flex w-100 ">
              <span className="text-[#86888F] min-w-[150px] w-[150px]">
                {key}:{" "}
              </span>
              <span className="">{value}</span>
            </div>
          ))}
          <div className="text-xs mt-2">{product.product_description}</div>
        </div>
        <div className="col-span-3 col-start-9 p-2">
          <div className="rounded-md text-sm  p-3 shadow-lg w-100">
            <div>
              <strong>{product.product_title}</strong>
            </div>
            <div className="text-lg">
              {product.product_price} {product.currency}
            </div>
            <div className="flex items-center text-center">
              <Rating
                name="customized-10"
                defaultValue={1}
                size="small"
                max={1}
              />
              <span className="mt-0.5 ml-1">
                {" "}
                {product.product_star_rating}{" "}
              </span>
            </div>

            <div>
              <span className=" text-zinc-600">Available: </span>
              {product.product_availability}
            </div>
            <div className=" text-zinc-600">{product.sales_volume}</div>
            <button className="my-2 bg-[#363EF8] w-100 rounded-sm text-[#eee] text-center py-2">
              Comapare
            </button>
          </div>
        </div>
      </div>
    </Conatiner>
  );
}
