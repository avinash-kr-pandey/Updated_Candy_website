import React, { useContext, useState } from "react";
import { Store } from "../../context/Store";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { Token } = useContext(Store);
  const [buttonText, setButtonText] = useState('Add to cart');
  const { addToCart } = useContext(Store);

  const product = {
    id: 1,
    imgSrc: './productsimg/1.webp',
    description: 'Jet Puffed Gummy Peg Bag 5oz 12ct',
    brand: 'Jet',
    type: 'Gummy',
    name: 'Jet Puffed Gummy Peg Bag 5oz 12ct',
    price: 250,
  };
  console.log('Product:', product);

  const handleButtonClick = () => {
    addToCart(product);
    setButtonText('Added');
  };
  return (
    <section className="Productsimg items-center  lg:px-[200px] text-blue-900 flex flex-col gap-8">
      <p className="text-3xl font-bold lg:self-start whitespace-nowrap">
        Featured products
      </p>
      <div className="flex gap-8 justify-center  flex-wrap">

        {/* -------------------------------------------TASK-------------------------------------------------------- */}
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              {product.name}
            </p>
            {Token ? (
              <div className="px-3 py-2 text-blue-900 font-semibold">
                <p>${product.price}</p>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md"
              >
                LOG IN TO SEE PRICE
              </NavLink>
            )}
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button
              className="py-2 border-2 border-blue-900 w-[150px] rounded-full"
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </article>
        </div>
        {/* -------------------------------------------TASK-------------------------------------------------------- */}

        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/2.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Pomegranate Licorice 5oz 6ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex  md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/3.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Strawberry Licorice 5oz 6ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/4.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Sour Giggles 2oz 12ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/5.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Giggles 2oz 12ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/6.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Chewys 2oz 12ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/7.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Black Licorice 5oz 6ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
          <article className="border rounded-xl border-blue-900 p-5">
            <img src="./productsimg/8.webp" alt="" className="w-[200px]" />
          </article>
          <article className="flex flex-col gap-2">
            <p className="font-bold text-md h-[70px] lg:h-auto">
              YumEarth Organic Fruit Snacks 2oz 12ct
            </p>
            <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
              LOG IN TO SEE PRICE
            </button>
          </article>
          <article className="flex md:flex-row flex-col items-center gap-4">
            <div className="flex w-[150px] justify-around border border-blue-900  py-1 rounded-full items-center">
              <p className="text-3xl">-</p> <p>1</p>
              <p className="text-2xl">+</p>
            </div>
            <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
              Add to cart
            </button>
          </article>
        </div>
      </div>
      <button className="py-3 px-10 bg-blue-900 text-white rounded-full">
        View all
      </button>
    </section>
  );
}

export default Product;
