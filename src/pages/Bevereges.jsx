import React, { useState } from "react";

const Bevereges = () => {
  // Define state for the counter
  const [count, setCount] = useState(0);

  // Handler functions to increase and decrease the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <section className="Productsimg items-center lg:px-[200px] py-8 text-blue-900 flex flex-col gap-8">
        <p className="text-3xl font-bold lg:self-start whitespace-nowrap">
          By Brand
        </p>
        <div className="p-4">
          <div className="grid gap-8 justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
              <article className="border rounded-xl border-blue-900 p-5">
                <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
              </article>
              <article className="flex flex-col gap-2">
                <p className="font-bold text-md h-[70px] lg:h-auto">
                  Jet Puffed Gummy Peg Bag 5oz 12ct
                </p>
                <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
                  LOG IN TO SEE PRICE
                </button>
              </article>
              <article className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
                  <button onClick={handleDecrement} className="text-3xl">
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={handleIncrement} className="text-2xl">
                    +
                  </button>
                </div>
                <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
                  Add to cart
                </button>
              </article>
            </div>

            <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
              <article className="border rounded-xl border-blue-900 p-5">
                <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
              </article>
              <article className="flex flex-col gap-2">
                <p className="font-bold text-md h-[70px] lg:h-auto">
                  Jet Puffed Gummy Peg Bag 5oz 12ct
                </p>
                <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
                  LOG IN TO SEE PRICE
                </button>
              </article>
              <article className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
                  <button onClick={handleDecrement} className="text-3xl">
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={handleIncrement} className="text-2xl">
                    +
                  </button>
                </div>
                <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
                  Add to cart
                </button>
              </article>
            </div>
            <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
              <article className="border rounded-xl border-blue-900 p-5">
                <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
              </article>
              <article className="flex flex-col gap-2">
                <p className="font-bold text-md h-[70px] lg:h-auto">
                  Jet Puffed Gummy Peg Bag 5oz 12ct
                </p>
                <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
                  LOG IN TO SEE PRICE
                </button>
              </article>
              <article className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
                  <button onClick={handleDecrement} className="text-3xl">
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={handleIncrement} className="text-2xl">
                    +
                  </button>
                </div>
                <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
                  Add to cart
                </button>
              </article>
            </div>
            <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
              <article className="border rounded-xl border-blue-900 p-5">
                <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
              </article>
              <article className="flex flex-col gap-2">
                <p className="font-bold text-md h-[70px] lg:h-auto">
                  Jet Puffed Gummy Peg Bag 5oz 12ct
                </p>
                <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
                  LOG IN TO SEE PRICE
                </button>
              </article>
              <article className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
                  <button onClick={handleDecrement} className="text-3xl">
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={handleIncrement} className="text-2xl">
                    +
                  </button>
                </div>
                <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
                  Add to cart
                </button>
              </article>
            </div>
            <div className="w-[180px] md:w-[250px] flex flex-col gap-2">
              <article className="border rounded-xl border-blue-900 p-5">
                <img src="./productsimg/1.webp" alt="" className="w-[200px]" />
              </article>
              <article className="flex flex-col gap-2">
                <p className="font-bold text-md h-[70px] lg:h-auto">
                  Jet Puffed Gummy Peg Bag 5oz 12ct
                </p>
                <button className="px-3 py-2 max-w-[180px] bg-blue-900 font-semibold text-white rounded-md">
                  LOG IN TO SEE PRICE
                </button>
              </article>
              <article className="flex md:flex-row flex-col items-center gap-4">
                <div className="flex w-[150px] justify-around border border-blue-900 py-1 rounded-full items-center">
                  <button onClick={handleDecrement} className="text-3xl">
                    -
                  </button>
                  <p>{count}</p>
                  <button onClick={handleIncrement} className="text-2xl">
                    +
                  </button>
                </div>
                <button className="py-2 border-2 border-blue-900 w-[150px] rounded-full">
                  Add to cart
                </button>
              </article>
            </div>
          </div>
          
        </div>

        <button className="py-3 px-10 bg-blue-900 text-white rounded-full">
          View all
        </button>
      </section>
    </div>
  );
};

export default Bevereges;
