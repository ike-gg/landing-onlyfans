import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/keyboard";

interface ApiResponse {
  gallery: {
    fields: {
      file: {
        url: string;
      };
    };
    sys: {
      id: string;
    };
  }[];
}

const PhotoSlider = () => {
  const [images, setImages] = useState<{ url: string; id: string }[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const rawData = await fetch(
        "https://sins-agency-backend.vercel.app/api/getLandingContent"
      );
      const data = (await rawData.json()) as ApiResponse;
      const urlImages = data.gallery.map((image) => {
        const url = image.fields.file.url;
        const id = image.sys.id;
        return { url, id };
      });
      setImages(urlImages);
    };

    fetchImages().catch(console.error);
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      pagination={{ clickable: true }}
      centeredSlides
      slidesPerView={1}
    >
      {images.map((image) => {
        return (
          <SwiperSlide
            key={image.id}
            className="flex justify-center cursor-grab active:cursor-grabbing"
          >
            <img
              src={image.url}
              alt={image.id}
              className="object-cover aspect-image w-11/12 my-11 rounded-md shadow-xl"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PhotoSlider;
