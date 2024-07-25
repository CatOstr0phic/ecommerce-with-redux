import { useStateValue } from "../redux/StateProvider";
import Cards from "./Cards";
import Subtotal from "./Subtotal";
import Logo from "../header/Logo";

const Basket = ({ basketOpen, setBasketOpen }) => {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div
        className={`fixed z-10 top-0  bottom-0 left-0  
    bg-white transition-all 
     duration-300 ease-in-out transform translate-x-0 ${
       basketOpen
         ? "md:w-[450px] w-[100%]  overflow-auto "
         : " h-100 w-0 overflow-hidden"
     }`}
      >
        <div className="relative p-2 flex flex-col gap-3">
          <div className="absolute top-3 right-5 cursor-pointer" onClick={() => setBasketOpen(!basketOpen)}>
            X
          </div>
          <Logo />
          <Subtotal />
          <div>
            {basket.map((product) => (
              <>
                <Cards
                  type={"REMOVE_FROM_BASKET"}
                  id={product.id}
                  nums={product.nums}
                  productName={product.productName}
                  productCost={product.productCost}
                  productImg={product.productImg}
                  product_star_rating={product.product_star_rating}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <div
        onClick={() => setBasketOpen(!basketOpen)}
        className={`fixed -right-20 ml-10 -mr-10 left-0 h-screen 
        bottom-0 top-0  z-1
       bg-[#00000080] cursor-pointer ${!basketOpen && "hidden"}`}
      ></div>
    </>
  );
};
export default Basket;
