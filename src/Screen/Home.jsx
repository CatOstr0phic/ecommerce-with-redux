import Container from "../layouts/Conatiner";
import Populars from "../components/Populars";
import Constructor from "../layouts/Constructor";
import AdaptiveCathegries from "../components/AdaptiveCathegries";
import CombareCards from "../components/CombareCards";
import { Link } from "react-router-dom";
import DiscountCards from "../components/DiscountCards";
// import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { useStateValue } from "../redux/StateProvider";
import axios from "axios";


const cathegories = [
  { id: 1, name: "Electronics", imgUrl: "./assets/9500000000000030x2.webp" },
  { id: 2, name: "Home technices", imgUrl: "./assets/2.webp" },
  { id: 3, name: "Computers", imgUrl: "./assets/3.webp" },
  { id: 4, name: "For car", imgUrl: "./assets/4.webp" },
  { id: 5, name: "Sport and Relax", imgUrl: "./assets/5.webp" },
  { id: 6, name: "For Kids", imgUrl: "./assets/6.webp" },
  { id: 7, name: "Home", imgUrl: "./assets/7.webp" },
  { id: 8, name: "Garden working", imgUrl: "./assets/8.webp" },
  { id: 9, name: "Beauty and Health", imgUrl: "./assets/9.webp" },
  { id: 10, name: "For Pets", imgUrl: "./assets/10.webp" },
];

// const discounts = [
//   {
//     id: 1,
//     productName: " HTC A101 Moon Silver ",
//     fullname:
//       "Планшет HTC A101 Moon Silver (Unisoc Tiger T618 2.0 GHz/8192Mb/128Gb/Wi-Fi/Bluetooth/LTE/GPS/Cam/10.1/1920x12",
//     productCost: "23 000",
//     productImg: "./assets/norm.jpg",
//     realcost: "15 866",
//     discount: "14 600",
//     category: "Gadgets",
//     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque ex nihil aperiam vero incidunt reiciendis corrupti tempore totam consequuntur repellendus, eum nam quidem ut doloremque maxime dolor repudiandae eligendi.",
//   },
//   {
//     id: 2,
//     productName: "KeyBoard LogiTech",
//     productCost: "23 000",
//     productImg: "./assets/4.webp",
//     realcost: "2",

//     category: "Gadgets",
//   },
//   {
//     id: 3,
//     productName: "Apple AirPods 3",
//     productCost: "230",
//     productImg: "./assets/3.webp",
//     realcost: "132",

//     category: "Gadgets",
//   },
//   {
//     id: 4,
//     productName: "Samsung Galaxy Tab A9 Sm-XX11",
//     productCost: "45 000",
//     productImg: "./assets/6.webp",
//     realcost: "332",

//     category: "Gadgets",
//   },
// ];

const brands = [
  { id: 1, brandsImg: "./assets/21.png" },
  { id: 2, brandsImg: "./assets/22.png" },
  { id: 3, brandsImg: "./assets/23.png" },
  { id: 4, brandsImg: "./assets/24.png" },
  { id: 5, brandsImg: "./assets/25.png" },
  { id: 6, brandsImg: "./assets/26.png" },
];

// const images = [
//   "./assets/first (1).png",
//   "./assets/first (2).png",
//   "./assets/first (3).png",
// ];

// const banner = [
//   {id: 1, color: "#d06b6b", title: "It is First banner"},
//   {id: 2, color: "#6bd0c1", title: "It is second banner"},
// ];

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const [{ products }, dispatch] = useStateValue();


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


  // const [discounts, setDiscounts] = useState(null);

  // const options = {
  //   method: "GET",
  //   url: "http://localhost:3000/data",
  //   header: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data.deals);
  //       setDiscounts(response.data.deals);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const filteredDeals = deals.slice(-5).reverse();


  return (
    <>
      {/* <Carousel images={images} banner={banner}/> */}
      <Container>
        <Populars />
      </Container>

      <Container>
        <Constructor constructorName={"The Most Cathegories"}>
          {cathegories.map((category) => (
            <Link to="/electronics">
              <AdaptiveCathegries
                id={category.id}
                name={category.name}
                imgUrl={category.imgUrl}
              />
            </Link>
          ))}
        </Constructor>
        <Constructor constructorName={"History"}>
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
        <Constructor constructorName={"Brands"}>
          {brands.map((brand) => (
            <div id={brand.id} className="hover:border hover:shadow-sm">
              <img src={brand.brandsImg} alt="#" />
            </div>
          ))}
        </Constructor>
        <Constructor constructorName={"Discounts"}>
          {filteredDeals.map((deal) => (
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
        </Constructor>
      </Container>
    </>
  );
}
