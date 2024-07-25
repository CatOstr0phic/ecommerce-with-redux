/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Conatiner from "../layouts/Conatiner";
import Breadcrumb from "../components/Breadcrumb";
import OnCategory from "../components/OnCategory";
import styled from "@emotion/styled";
import Constructor from "../layouts/Constructor";
import { Link } from "react-router-dom";
import CombareCards from "../components/CombareCards";
import { useStateValue } from "../redux/StateProvider";
import axios from "axios";

const Container = styled.div`
  padding: 10px 25px;
  background-color: #f5f5f5;
  display: inline-block;
  border-radius: 8px;
`;

export default function Categories() {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

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
        setData(response.data.best_sellers);

        
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const [{ products }, dispatch] = useStateValue();
  return (
    <>
      <Conatiner>
        {/* Brecrumb */}
        <Breadcrumb />
        {/* Chooosen category with its categories */}
        <OnCategory category={"Gadgets and Electronics"}>
          <Link to="/">
            <Container>Computers</Container>
          </Link>
          <Container>Monoblocks</Container>
          <Container>Planshats</Container>
          <Container>Periferials</Container>
          <Container>Laptop</Container>
          <Container>Servers</Container>
          <Container>Matrix</Container>
          <Container>Monitors</Container>
        </OnCategory>
        <Constructor constructorName={"Periferials"}>
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
        </Constructor>
        <Constructor constructorName={"Computers"}>
          {data.map((product) => (
            <>
              <>
                <CombareCards
                  key={product.asin}
                  id={product.rank}
                  nums={product.nums}
                  icon={product.icon}
                  productName={product.product_title}
                  productCost={product.product_price}
                  productImg={product.product_photo}
                />
              </>
            </>
          ))}
        </Constructor>

        <Constructor constructorName={"Planshet"}>
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
        </Constructor>

        {/* filter by category */}
      </Conatiner>
    </>
  );
}
