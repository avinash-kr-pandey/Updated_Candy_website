import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/908/130/non_2x/halloween-banner-with-cartoon-holiday-sweets-and-candies-creepy-dessert-on-halloween-party-horizontal-background-holiday-banner-with-halloween-spooky-cookies-treat-lollipop-candy-on-a-violet-vector.jpg"
            className="h-fit w-full"
            alt="img1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/612/397/177/back-to-school-banner-candy-chalk-wallpaper-preview.jpg"
            className="h-fit w-full"
            alt="img2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://as2.ftcdn.net/v2/jpg/04/79/22/73/1000_F_479227313_8p1itFESnTBOlREUkZibz13UhCYOpGnU.jpg"
            className="h-fit w-full"
            alt="img3"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://shutterstock.com/image-vector/happy-new-year-banner-xmas-260nw-2213016359.jpg"
            className="h-fit w-full"
            alt="img4"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src="https://i.pinimg.com/originals/23/f3/db/23f3db8b8ea506a591e0662273daf4d1.jpg"
            className="h-fit w-full"
            alt="img5"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
