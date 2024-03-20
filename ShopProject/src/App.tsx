import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DetailProduct from "./components/products/DetailProduct";

export default function App() {
  /* 
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then(console.log); */

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={DetailProduct} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
