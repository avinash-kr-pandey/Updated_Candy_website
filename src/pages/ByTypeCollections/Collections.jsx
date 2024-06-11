
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const productData = {
    page1: [
      {
        id: 1,
        imgSrc: "./productsimg/1.webp",
        title: "Jet Puffed Gummy Peg Bag 5oz 12ct",
      },
      {
        id: 2,
        imgSrc: "./productsimg/2.webp",
        title: "Product 2 Description",
      },
      {
        id: 3,
        imgSrc: "./productsimg/3.webp",
        title: "Product 3 Description",
      },
      {
        id: 4,
        imgSrc: "./productsimg/4.webp",
        title: "Product 4 Description",
      },
      {
        id: 5,
        imgSrc: "./productsimg/5.webp",
        title: "Product 5 Description",
      },
    ],
    page2: [
      {
        id: 6,
        imgSrc: "./productsimg/6.webp",
        title: "Product 6 Description",
      },
      {
        id: 7,
        imgSrc: "./productsimg/7.webp",
        title: "Product 7 Description",
      },
      {
        id: 8,
        imgSrc: "./productsimg/8.webp",
        title: "Product 8 Description",
      },
      {
        id: 9,
        imgSrc: "./productsimg/9.webp",
        title: "Product 9 Description",
      },
    ],
    page3: [
      {
        id: 10,
        imgSrc: "./productsimg/10.webp",
        title: "Product 10 Description",
      },
      {
        id: 11,
        imgSrc: "./productsimg/11.webp",
        title: "Product 11 Description",
      },
      {
        id: 12,
        imgSrc: "./productsimg/12.webp",
        title: "Product 12 Description",
      },
      {
        id: 13,
        imgSrc: "./productsimg/13.webp",
        title: "Product 13 Description",
      },
      {
        id: 14,
        imgSrc: "./productsimg/14.webp",
        title: "Product 14 Description",
      },
      {
        id: 15,
        imgSrc: "./productsimg/15.webp",
        title: "Product 15 Description",
      },
      {
        id: 16,
        imgSrc: "./productsimg/16.webp",
        title: "Product 16 Description",
      },
    ],
  };

const Collections = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState("page1");
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    if (location.state && location.state.page) {
      setSelectedPage(location.state.page);
    }
  }, [location.state]);

  const handleQuantityChange = (productId, quantityChange) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + quantityChange,
    }));
  };

  const renderProducts = () => {
    if (!productData[selectedPage]) return null;
    return productData[selectedPage].map((product) => (
      <div
        key={product.id}
        className="w-[180px] md:w-[250px] flex flex-col gap-2"
      >
        <article className="border rounded-xl border-blue-900 p-5">
          <img src={product.imgSrc} alt={product.title} className="w-[200px]" />
        </article>
        <article className="flex flex-col gap-2">
          <p className="font-bold text-md h-[70px] lg:h-auto">
            {product.title}
          </p>
          <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
            LOG IN TO SEE PRICE
          </button>
        </article>
        <article className="flex md:flex-row flex-col items-center gap-4">
          <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
            <button
              className="text-3xl"
              onClick={() => handleQuantityChange(product.id, -1)}
            >
              -
            </button>{" "}
            <p>{productQuantities[product.id] || 0}</p>
            <button
              className="text-2xl"
              onClick={() => handleQuantityChange(product.id, 1)}
            >
              +
            </button>
          </div>
          <div>
            <button className="border w-[120px] p-2 border-blue-900 rounded-full">
              Add to cart
            </button>
          </div>
        </article>
      </div>
    ));
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-12">
      <article className="text-center flex flex-col gap-4">
        <h1 className="text-blue-900 font-bold text-2xl md:text-4xl">
          OUR PRODUCTS
        </h1>
        <p className="text-sm md:text-base">
          Experience exceptional service and premium quality at HappyVores.
        </p>
      </article>
      <article className="flex justify-evenly flex-wrap gap-8">
        {renderProducts()}
      </article>
    </section>
  );
};

export default Collections;
