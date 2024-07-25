import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screen/Home";
import Favorites from "./Screen/Favorites";
import Footer from "./components/Footer";
import Header from "./header/Header";
// import Container from "./layouts/Conatiner";
import Test from "./SwiperWrapper/Test";
import { useState } from "react";
import Categories from "./Screen/Cathegories";
import ProductInfo from "./Screen/ProductInfo";
import CategoriesList from "./Screen/CategoriesList";
import "./App.css";
import BestSellers from "./Screen/BestSellers";
import Deals from "./Screen/Deals";
// import Basket from "./components/Basket";

function App() {
  const [basketOpen, setBasketOpen] = useState(false);

  return (
    <section className="flex flex-col items-center w-full h-full ">
      {" "}
      <Router>
        <Header basketOpen={basketOpen} setBasketOpen={setBasketOpen} />

        <>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/test" element={<Test />} />
            <Route path="/electronics" element={<Categories />} />
            <Route path="/product-info" element={<ProductInfo />} />
            <Route path="/categories-list" element={<CategoriesList />} />
            <Route path="/best_sellers" element={<BestSellers />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </>
      </Router>
      <Footer />
    </section>
  );
}
export default App;
