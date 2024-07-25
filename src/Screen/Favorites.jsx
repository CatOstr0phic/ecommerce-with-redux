/* eslint-disable no-unused-vars */
import Constructor from "../layouts/Constructor";
import Container from "../layouts/Conatiner";
import React from "react";
import Cards from "../components/Cards";
import { useStateValue } from "../redux/StateProvider";
import { Card } from "@mui/material";

export default function Favorites() {
  const [{ fav }, dispatch] = useStateValue();

  return (
    <Container>
      <h1 className="text-3xl font-semibold">Favorites</h1>
      {fav.length > 0 ? (
        <>
          <div className="py-5 grid gap-2 ">
            {fav.map((product) => (
              <>
                <Cards
                type={"REMOVE_FROM"}
                  id={product.id}
                  nums={product.nums}
                  productName={product.productName}
                  productCost={product.productCost}
                  productImg={product.productImg}
                />
              </>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-2xl font-semibold text-zinc-700">
          You have no favourite projects!
        </div>
      )}
    </Container>
  );
}
