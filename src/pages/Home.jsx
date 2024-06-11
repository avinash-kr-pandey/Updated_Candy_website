import React from "react";
import Hero from "../components/home/Hero";
import Product from "../components/home/Product";
import Shop from "../components/home/Shop";
import Slider from "../components/home/Slider";

function Home() {
  return (
    <section>
      <Slider />
      <Product />
      <Shop />
    </section>
  );
}

export default Home;
