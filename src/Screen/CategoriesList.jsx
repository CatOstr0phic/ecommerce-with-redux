import React, { useState } from "react";
import Conatiner from "../layouts/Conatiner";
import Populars from "../components/Populars";
import Breadcrumb from "../components/Breadcrumb";
import Sorting from "../components/Sorting";
import CombareCards from "../components/CombareCards";
import { useStateValue } from "../redux/StateProvider";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Filtering from "../components/Filtering";


const filter = [
  {id: 1, value: "Computers"},
  {id: 1, value: "Handmade"},
  {id: 1, value: "Health & Personal Care"},
  {id: 1, value: "Luggage and travel gear"},
  {id: 1, value: "Sports & Outdoors"},
  {id: 1, value: "Stationery & Office Supplies"},
  {id: 1, value: "Garden & Outdoors"},
  {id: 1, value: "CDs & Vinyl"},
  {id: 1, value: "Computers"},
  {id: 1, value: "Computers"},
]

export default function CategoriesList() {
  const [display, setDisplay] = useState("grid");
  const [grid, setGrid] = useState(true);
  const [flex, setFlex] = useState();

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
  // eslint-disable-next-line no-unused-vars
  const [{ products, categoryName }, dispatch] = useStateValue();

  return (
    <Conatiner>
      <Breadcrumb />
      <h1>{categoryName}</h1>
      <Populars />
    
          <Sorting
            handleDisplayFlex={handleDisplayFlex}
            handleDisplayGrid={handleDisplayGrid}
            grid={grid}
            flex={flex}
          />

      <section className="flex gap-4 my-2 py-2">
        <Filtering filter={filter}/>
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
                id={product.id}
                nums={product.nums}
                icon={product.icon}
                productName={product.productName}
                productCost={product.productCost}
                productImg={product.productImg}
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
