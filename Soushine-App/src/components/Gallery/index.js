import React, { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./gallery.css";

function Gallery(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery w-100">
      <Swiper
        style={{
          "--swiper-navigation-color": "var(--soul-shine-primary)",
          "--swiper-pagination-color": "var(--soul-shine-primary)",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {props.imgList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="w-100"
                style={{
                  paddingTop: "100%",
                  background: `url(${item}) center center / cover no-repeat`,
                }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {props.imgList.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Gallery;
