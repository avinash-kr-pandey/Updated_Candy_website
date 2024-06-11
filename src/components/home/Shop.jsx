import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Shop() {
  return (
    <section className="Productsimg items-center md:items-start lg:px-[200px] py-[50px] text-blue-900 flex flex-col gap-8">
      <p className="text-3xl font-bold self-center lg:self-start whitespace-nowrap">
        Shop For
      </p>
      <article className="flex gap-8 justify-center flex-wrap">
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2 border rounded-xl border-blue-900 p-5">
          <p>Exotic Pop</p>
          <p className="flex items-center">
            Ships on a Pallet only Discounted shipping rate calculated at time
            of shipping... <IoIosArrowRoundForward className="text-[90px]" />
          </p>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2 border rounded-xl items-center border-blue-900 p-5">
          <img src="./productsimg/9.jpg" alt="" />
          <p className="flex items-center">
            Boston America
            <IoIosArrowRoundForward className="text-[30px]" />
          </p>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2 border rounded-xl items-center border-blue-900 p-5">
          <img src="./productsimg/10.avif" alt="" />
          <p className="flex items-center">
            Reese's
            <IoIosArrowRoundForward className="text-[30px]" />
          </p>
        </div>
        <div className="w-[180px] md:w-[250px] flex flex-col gap-2 border rounded-xl items-center border-blue-900 p-5">
          <img src="./productsimg/11.avif" alt="" />
          <p className="flex items-center">
            Haribo
            <IoIosArrowRoundForward className="text-[30px]" />
          </p>
        </div>
      </article>
      <button className="py-3 px-10 self-center bg-blue-900 text-white rounded-full">
        View all
      </button>
    </section>
  );
}

export default Shop;
