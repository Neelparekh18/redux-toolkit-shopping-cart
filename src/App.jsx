import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import CardPage from "./components/Card/CardPage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./components/Cart/CartPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CardPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
      
    </>
  );
};

export default App;
