import React, { useState } from "react";
import "./Card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cartsData from "../Cart/CartData";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cartSlice";
const CardPage = () => {
  const dispath = useDispatch();
  const [cartData, setCartData] = useState(cartsData);
  // console.log(cartData);

  const send = (e) => {
    dispath(addToCart(e));
  };
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: "400" }}>
          Restaurants in Ahmedabad Open Now
        </h2>

        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating} ★ </span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.address}</h5>
                      <span>{element.price}₹ </span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-center ">
                      {/* <img className="limg" src={element.delimg} alt="" /> */}
                      <Button
                        onClick={() => send(element)}
                        style={{
                          width: "150px",
                          padding: "10px 15px",
                          backgroundColor: "#ff3054",
                          color: "#fff",
                          border: "none",
                          borderRadius: "5px",
                          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                          transition: "background-color 0.3s ease",
                          cursor: "pointer",
                        }}
                        className="mt-2 mb-2"
                      >
                        Add To Cart
                      </Button>
                      {/* <img className="laimg" src={element.arrimg} alt="" /> */}
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CardPage;
