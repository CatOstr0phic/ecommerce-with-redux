import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { Close, Compare, FavoriteBorder, ShoppingBasket } from "@mui/icons-material";


const ModalProduct = ({
  id,
  deal_badge,
  deal_title,
  deal_photo,
  deal_state,
  deal_price_max,
  min_amount,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        style={{ backgroundColor: "blue", padding: "4px 8px",  }}
        onClick={() => setModalShow(true)}
        key={id}
      >
        Go to See
      </Button>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {deal_title}
          </Modal.Title>
          <div onClick={() => setModalShow(false)}>
            <Close color="primary" />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex justify-around gap-3">
            <div className="">
              <img
                src={deal_photo}
                className="w-100 h-100 object-contain"
                alt=""
              />
            </div>

            <div className="min-w-[60%] ">
              <div className="text-lg w-100  font-bold p-2 rounded-lg ">
                {deal_title}
              </div>
              <span className="text-zinc-500"> Deal Badge:</span>

              <span className="text-lg w-100 underline font-bold p-2 rounded-lg text-right">
                {deal_badge}
              </span>
              <div>
                <span className="text-zinc-500"> State:</span>

                <span className="text-lg w-100  font-bold p-2 rounded-lg text-right">
                  {deal_state}
                </span>
              </div>

              <div>
                <span className="text-zinc-500"> Max Price:</span>

                <span className="text-lg w-100  font-bold p-2 rounded-lg text-right">
                  {deal_price_max}
                </span>
              </div>
              <div>
                <span className="text-zinc-500"> Min Price:</span>

                <span className="text-lg w-100  font-bold p-2 rounded-lg text-right">
                  {min_amount}
                </span>
              </div>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas quos delectus aut quas eos ipsum explicabo odit impedit
                sunt, obcaecati vel neque?!
              </p>

              <div className="p-2 w-100 flex gap-3 justify-end">
                <button><ShoppingBasket color="success"/></button>
                <button><Compare color="primary"/></button>
                <button><FavoriteBorder color={"error"}/></button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>

      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
        category={deal_badge}
      /> */}
    </>
  );
};
export default ModalProduct;
