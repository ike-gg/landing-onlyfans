import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Skeleton from "react-loading-skeleton";

interface Props {
  images?: {
    url: string;
    id: string;
  }[];
}

const PhotoSlider: React.FC<Props> = (props) => {
  const { images } = props;

  let element: JSX.Element[] | JSX.Element = (
    <div className="m-auto w-11/12">
      <Skeleton className="aspect-image my-11 rounded-2xl" />
    </div>
  );

  if (images) {
    element = images.map((image) => {
      return (
        <SwiperSlide
          key={image.id}
          className="flex justify-center cursor-grab active:cursor-grabbing"
        >
          <img
            src={image.url}
            alt={image.id}
            className="object-cover aspect-image w-11/12 my-11 rounded-2xl shadow-xl"
          />
        </SwiperSlide>
      );
    });
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      pagination={{ clickable: true }}
      centeredSlides
      slidesPerView={1}
    >
      {element}
    </Swiper>
  );
};

export default PhotoSlider;
