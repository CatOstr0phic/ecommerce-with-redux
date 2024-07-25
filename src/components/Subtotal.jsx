import { useStateValue } from "../redux/StateProvider";
import { getBasketTotal } from "../redux/reducer";

import CurrencyFormat from "react-currency-format";

function Subtotal() {

  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue(); 
  return (
    <>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

    </>
  );
}

export default Subtotal;
