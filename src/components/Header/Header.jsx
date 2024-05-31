import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
  const cartData = useSelector((state) => state);
  // console.log(cartData);

  const cartItemCount = cartData.allCart.carts.length;
  return (
    <>
      <Navbar
        style={{ height: "60px", backgroundColor: "black", color: "white" }}
      >
        <Container>
          <NavLink to={"/"} className={"text-decoration-none text-light mx-2"}>
            <h3 className="text-light">ToolkitCart</h3>
          </NavLink>

          <NavLink
            to={"/cart"}
            className={"text-decoration-none text-light mx-2"}
          >
            <div id="ex4">
              <span
                className="p1 fa-stack fa-2x has-badge"
                data-count={cartItemCount}
              >
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
