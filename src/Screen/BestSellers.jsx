import React, { useEffect, useState } from "react";
import Conatiner from "../layouts/Conatiner";
import Populars from "../components/Populars";
import Breadcrumb from "../components/Breadcrumb";
import Sorting from "../components/Sorting";
import CombareCards from "../components/CombareCards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Filtering from "../components/Filtering";
// import { Link } from "react-router-dom";
import { useStateValue } from "../redux/StateProvider";
import axios from "axios";

const category = [
    { id: 1, value: "Computers" },
    { id: 2, value: "Handmade" },
    { id: 3, value: "Health & Personal Care" },
    { id: 4, value: "Luggage and travel gear" },
    { id: 5, value: "Sports & Outdoors" },
    { id: 6, value: "Stationery & Office Supplies" },
    { id: 8, value: "Garden & Outdoors" },
    { id: 9, value: "CDs & Vinyl" },
    { id: 10, value: "Computers" },
    { id: 11, value: "Computers" },
  ],
  rate = [
    { id: 1234, rating: "5" },

    { id: 3244, rating: "4" },

    { id: 12344, rating: "3" },

    { id: 1784, rating: "2" },

    { id: 7684, rating: "1" },
    { id: 7624, rating: "All" }
  ];

export default function BestSellers() {
  const [display, setDisplay] = useState("grid");
  const [grid, setGrid] = useState(true);
  const [flex, setFlex] = useState();

  const [productsData, setProductsData] = useState([]);

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
        console.log(response.data.best_sellers);
        setProductsData(response.data.best_sellers);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDisplayGrid = () => {
    flex ? setFlex(false) : setFlex(flex);
    setGrid(true);
    setDisplay("grid");
    console.log(display);
  };

  const handleDisplayFlex = () => {
    grid ? setGrid(false) : setGrid(grid);
    setFlex(true);
    setDisplay("flex");
    console.log(display);
  };
  //   const [{ products }, dispatch] = useStateValue();

  // eslint-disable-next-line no-unused-vars
  const [{selectedRating}, dispatch]  = useStateValue();
  const products = selectedRating === "All" ? productsData : productsData.filter(product => parseInt(product.product_star_rating) === parseInt(selectedRating))
 console.log(products)

  return (
    <Conatiner>
      <Breadcrumb />
      <h1>Best Sellers</h1>
      <Populars />

      <Sorting
        handleDisplayFlex={handleDisplayFlex}
        handleDisplayGrid={handleDisplayGrid}
        grid={grid}
        flex={flex}
      />

      <section className="flex gap-4 my-2 py-2">
        <Filtering category={category} rate={rate}  />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={`${display} grid-cols-3 flex-col `}>
            {products.map((product) => (
              <CombareCards
                key={product.asin}
                id={product.rank}
                nums={product.product_num_ratings}
                icon={product.icon}
                productName={product.product_title}
                productCost={product.product_price}
                productImg={product.product_photo}
                product_star_rating={parseInt(product.product_star_rating)}
              />
            ))}
          </div>
          <div
            width="100%"
            style={{
              paddingBottom: "10px",
              marginTop: "15px",
              display: flex,
              justifyContent: "center",
            }}
          >
            <Stack spacing={2}>
              <Pagination
                count={10}
                variant="outlined"
                color="primary"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </section>
    </Conatiner>
  );
}
