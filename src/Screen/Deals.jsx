import React, { useEffect, useState } from "react";
import Conatiner from "../layouts/Conatiner";
import Populars from "../components/Populars";
import Breadcrumb from "../components/Breadcrumb";
import Sorting from "../components/Sorting";
// import CombareCards from "../components/CombareCards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
// import Filtering from "../components/Filtering";
// import { Link } from "react-router-dom";
import axios from "axios";
import DiscountCards from "../components/DiscountCards";


// const filter = [
//   {id: 1, value: "Computers"},
//   {id: 1, value: "Handmade"},
//   {id: 1, value: "Health & Personal Care"},
//   {id: 1, value: "Luggage and travel gear"},
//   {id: 1, value: "Sports & Outdoors"},
//   {id: 1, value: "Stationery & Office Supplies"},
//   {id: 1, value: "Garden & Outdoors"},
//   {id: 1, value: "CDs & Vinyl"},
//   {id: 1, value: "Computers"},
//   {id: 1, value: "Computers"},
// ]

export default function Deals() {
  const [display, setDisplay] = useState("grid");
  const [grid, setGrid] = useState(true);
  const [flex, setFlex] = useState();

  const [deals, setDeals] = useState([]);

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
        console.log(response.data.deals);
        setDeals(response.data.deals);
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

  return (
    <Conatiner>
      <Breadcrumb />
      <h1>Deals</h1>
      <Populars />
      
          <Sorting
            handleDisplayFlex={handleDisplayFlex}
            handleDisplayGrid={handleDisplayGrid}
            grid={grid}
            flex={flex}
          />
  
      <section className="flex gap-4 my-2 py-2">
        {/* <Filtering /> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={`${display} grid-cols-3 flex-col `}>
            {deals.map((deal) => (
              <DiscountCards
              deal={deal}
                key={deal.deal_id}
                id={deal.deal_id}
                deal_badge={deal.deal_badge}
                deal_photo={deal.deal_photo}
                deal_price_max={deal.deal_price_max}
                deal_price_min={deal.deal_price_min}

                deal_state={deal.deal_state}
                deal_title={deal.deal_title}
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
