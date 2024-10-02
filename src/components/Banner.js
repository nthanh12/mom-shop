import React from "react";
import { banners } from "../data/Data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Slider from "react-slick";

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slideToScroll: 1,
    prevArrow: <BiChevronLeft />,
    nextArrow: <BiChevronRight />,
  };

  return (
    <div>
      <div className="w-full">
        <Slider {...settings}>
          {banners.map((data, key) => (
            <div className="" key={key}>
              <img src={data.banner} alt="data-banner-img" width={"100%"}></img>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Banner;
