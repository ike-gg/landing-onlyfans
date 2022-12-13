import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";

const PhotoSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      pagination={{ clickable: true }}
      centeredSlides
      slidesPerView={1}
    >
      {["asdf", "ff", "af", "fasdf"].map((val, index) => {
        return (
          <SwiperSlide
            key={val}
            className="flex justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={`https://picsum.photos/700/500`}
              alt="xdd"
              className="object-cover aspect-image w-11/12 my-11 rounded-md shadow-xl"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PhotoSlider;
