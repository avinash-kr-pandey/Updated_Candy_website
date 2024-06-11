import React from "react";

function Footer() {
  return (
    <section className="bg-blue-900 text-white flex flex-col items-center pt-9 sticky w-full ">
      <p className=" font-bold text-xl p-6">Quick links</p>
      <ul className="flex md:flex-row flex-col items-center gap-3 md:gap-11">
        <li>ABOUT US</li>
        <li>CONTACT US</li>
        <li>OUR POLICY</li>
        <li>TERMS & CONDITIONS</li>
      </ul>
      <span className="py-[0.1px] bg-[#656565] w-full my-20"></span>
      <p>© 2024, candynow.ca</p>
    </section>
  );
}

export default Footer;
