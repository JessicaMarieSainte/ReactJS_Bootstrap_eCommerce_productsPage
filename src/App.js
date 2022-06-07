import "./App.css";
import React from "react";
import NavBar from "./components/Nav.js";
import Carousel from "./components/Carousel";
import ProductCard from "./components/productsCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <div className="row productsSection row-cols-md-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
