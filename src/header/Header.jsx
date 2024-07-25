import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Search from "./Search";
import ItemBtn from "./ItemBtn";
import Container from "../layouts/Conatiner";
import {
  CompareOutlined,
  FavoriteBorder,
  ShoppingBasketRounded,
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import City from "./City";
import SiteMenu from "./SiteMenu";
import Categories from "./Categories";
import CloseOpenBtn from "./CloseOpenBtn";
import { useStateValue } from "../redux/StateProvider";
import Basket from "../components/Basket";

const siteMenu = [
  {
    id: "1",
    siteMenuName: "Best Sellers",
    path: "/best_sellers",
  },
  {
    id: "2",
    siteMenuName: "Deals",
    path: "/deals",
  },
  {
    id: "3",
    siteMenuName: "Phone",
  },
  {
    id: "4",
    siteMenuName: "Computers",
  },
  {
    id: "5",
    siteMenuName: "Brands",
  },
  {
    id: "6",
    siteMenuName: "Headphones",
  },
  {
    id: "7",
    siteMenuName: "Electronics",
  },
];

export default function Header() {
  const [checked, setChecked] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [basketOpen, setBasketOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    setChecked((prev) => !prev);
  };

  // eslint-disable-next-line no-unused-vars
  const [{ fav }, dispatch] = useStateValue();

  return (
    <>
      <nav className="top-0 sticky w-full z-10 bg-white">
        <Container>
          <section
            className="sticky flex flex-col
       items-center gap-1 w-full"
          >
            <div
              className="flex w-full items-center
         justify-between gap-3 max-h-[45px]"
            >
              <Logo />
              <CloseOpenBtn closeClick={handleOpen} isOpen={isOpen} />
              <Search />
              <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
              <Link to="/favorites">
                <div className="flex items-center text-white relative">
                  <ItemBtn icon={<FavoriteBorder />} iconName={"Favourites"} />
                  <span
                    className="absolute top-0.5 right-3.5 
              bg-red-700 w-3 h-3
              flex items-center justify-center  
               rounded-full text-[8px] font-bold"
                  >
                    <>{fav?.length}</>
                  </span>
                </div>
              </Link>
              <Link to="/compare">
                <ItemBtn icon={<CompareOutlined />} iconName={"Compare"} />
              </Link>
              <div
                className="cursor-pointer"
                onClick={() => setBasketOpen(!basketOpen)}
              >
                <ItemBtn icon={<ShoppingBasketRounded />} iconName={"Basket"} />
              </div>
            </div>
            <div
              className="flex w-full items-center
         gap-5 max-h-[45px]"
            >
              <City />
              <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
              <SiteMenu siteMenu={siteMenu} />
            </div>
          </section>
          {isOpen ? (
            <Categories
              modalOpen={isOpen}
              checked={checked}
              setChecked={setChecked}
            />
          ) : (
            ""
          )}
        </Container>{" "}
        <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
      </nav>{" "}
    </>
  );
}
