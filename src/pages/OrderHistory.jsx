import React from "react";

function OrderHistory() {
  return (
    <section className="ml-10 flex mt-8 flex-col gap-2">
      <div className="relative  ">
        <div className="relative  flex justify-center md:justify-start">
          <span className="pr-3 text-2xl  font-medium text-blue-900 bg-white">
            {" "}
            Order History{" "}
          </span>
        </div>
      </div>
      <div className="space-y-8 flex flex-col py-10 gap-8 lg:divide-y lg:divide-gray-100">
        <div className="pt-8  flex md:flex-row flex-col items-center lg:items-end group">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              className="md:w-full rounded-md h-32 w-20 lg:w-32  object-cover"
              src="./productsimg/1.webp"
              alt="text"
            />
          </div>
          <div>
            <span className="text-sm text-gray-500">August 20.20.21</span>
            <p className="mt-3 text-lg font-medium leading-6">
              <a
                href="./blog-post.html"
                className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
              >
                Jet Puffed Gummy Peg Bag 5oz 12ct
              </a>
            </p>
            <p className="mt-2 text-lg text-gray-500">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
          </div>
        </div>
        <div className="pt-8  flex md:flex-row flex-col items-center lg:items-end group">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              className="md:w-full rounded-md h-32 w-20 lg:w-32  object-cover"
              src="./productsimg/2.webp"
              alt="text"
            />
          </div>
          <div>
            <span className="text-sm text-gray-500">August 20.20.21</span>
            <p className="mt-3 text-lg font-medium leading-6">
              <a
                href="./blog-post.html"
                className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
              >
                Jet Puffed Gummy Peg Bag 5oz 12ct
              </a>
            </p>
            <p className="mt-2 text-lg text-gray-500">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
          </div>
        </div>
        <div className="pt-8  flex md:flex-row flex-col items-center lg:items-end group">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <img
              className="md:w-full rounded-md h-32 w-20 lg:w-32  object-cover"
              src="./productsimg/3.webp"
              alt="text"
            />
          </div>
          <div>
            <span className="text-sm text-gray-500">August 20.20.21</span>
            <p className="mt-3 text-lg font-medium leading-6">
              <a
                href="./blog-post.html"
                className="text-xl text-gray-800 group-hover:text-gray-500 lg:text-2xl"
              >
                Jet Puffed Gummy Peg Bag 5oz 12ct
              </a>
            </p>
            <p className="mt-2 text-lg text-gray-500">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderHistory;
