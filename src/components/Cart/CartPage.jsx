import React from "react";
import { Button } from "react-bootstrap";
import "./cartPage.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeAll,
  removeOne,
  qtyDecrement
} from "../../redux/features/cartSlice";

const CartPage = () => {
  // const arr = [0, 1, 2];
  const dispath = useDispatch();
  const data = useSelector((state) => state.allCart.carts);
  console.log("data", data);

  const handleIncrement = (e) => {
    dispath(addToCart(e));
  };

  const handleDecrement = (e) => {
    dispath(qtyDecrement(e));
  };

  const handleDeleteAll = () => {
    dispath(removeAll());
  };

  const handleDelete = (e) => {
    dispath(removeOne(e));
  };
  //total amount
  const totalPrice = data.reduce(
    (acc, currVal) => acc + currVal.price * currVal.qnty,
    0
  );
  return (
    <>
      <div className="row justify-content-center m-0">
        <div className="col-md-8 mt-5 mb-5 cardsdetails">
          <div className="card">
            <div className="card-header bg-dark p-3">
              <div className="card-header-flex">
                <h5 className="text-white m-0">
                  Cart Calculation({data.length})
                </h5>
                {data.length > 0 ? (
                  <button
                    onClick={() => handleDeleteAll()}
                    className="btn btn-danger mt-0 btn-sm"
                  >
                    <i className="fa fa-trash-alt mr-2" />{" "}
                    <span>Empty Cart</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-body p-0">
              {data.length === 0 ? (
                <table className="table cart-table mb-0">
                  <tbody>
                    <tr>
                      <td colSpan={6}>
                        <div className="cart-empty">
                          <i className="fa fa-shopping-cart" />
                          <p>Your Cart is Empty</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <table className="table cart-table mb-0 table-responsive-sm">
                  <thead>
                    <tr>
                      <th>Action</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th className="text-right ">
                        {" "}
                        <span id="amount" className="amount">
                          {" "}
                          Total Amount{" "}
                        </span>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((data, index) => {
                      return (
                        <>
                          <tr key={index}>
                            <td>
                              <button
                                onClick={() => handleDelete(data)}
                                className="prdct-delete"
                              >
                                <i className="fa fa-trash-alt mr-2" />
                              </button>
                            </td>
                            <td>
                              <div className="product-img">
                                <img src={data.imgdata} alt="image" />
                              </div>
                            </td>
                            <td>
                              <div className="product-name">
                                <p>{data.dish}</p>
                              </div>
                            </td>
                            <td>{data.price}₹</td>
                            <td>
                              <div className="prdct-qty-container">
                                <button className="prdct-qty-btn" type="button"  onClick={() => handleDecrement(data)}>
                                  <i className="fa fa-minus" />
                                </button>
                                <input
                                  type="text"
                                  className="qty-input-box"
                                  disabled
                                  name=""
                                  id=""
                                  value={data.qnty}
                                />
                                <button
                                  className="prdct-qty-btn"
                                  type="button"
                                  onClick={() => handleIncrement(data)}
                                >
                                  <i className="fa fa-plus" />
                                </button>
                              </div>
                            </td>
                            <td className="text-right">
                              {data.price * data.qnty}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th> &nbsp; </th>
                      <th colSpan={3}> &nbsp; </th>
                      <th>
                        {" "}
                        Items In Cart <span className="ml-2 mr-2">:</span>{" "}
                        <span className="text-danger">{data.length}</span>{" "}
                      </th>

                      <th className="text-right">
                        {" "}
                        Total Price <span className="ml-2 mr-2">:</span>{" "}
                        <span className="text-danger">{totalPrice}</span>{" "}
                      </th>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
