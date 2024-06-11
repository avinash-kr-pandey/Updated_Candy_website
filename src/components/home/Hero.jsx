import React from "react";

function Hero() {
  return (
    <section className="relative">
      <img src="hero.webp" alt="" className="py-5 w-full " />
      <article className="lg:absolute block bottom-[50px] left-[300px] bg-white rounded-lg p-8">
        <p className="text-3xl font-semibold text-blue-900">
          Browse our latest products
        </p>
        <button className="py-4 px-10 bg-blue-900 text-white rounded-full mt-4">
          Shop Featured & New
        </button>
      </article>
    </section>
  );
}

export default Hero;
