import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useFetchProductQuery } from "../redux/api/productApiSlice";

const Slide = () => {
  const { data: product, isLoading } = useFetchProductQuery();
  console.log(product);

  const settings = {
    dots: false,
    infinity: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1,
    arrows: false,
  };

  return (
    <div className="w-full border-red-500 border z-0">
      <Slider {...settings}>
        {product?.map((data) => (
          <div className="w-full border-red-500 border p-5">
            <img
              className="w-full h-[400px] border-red-500 border p-5"
              src={data.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
