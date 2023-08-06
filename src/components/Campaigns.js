import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextButton({ style, onClick }) {
  return (
    <button
      className={` text-brand-color z-10 absolute top-1/2 -right-8 -translate-y-1/2`}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowForward size={30} />
    </button>
  );
}

function PrevButton({ style, onClick }) {
  return (
    <button
      className={` text-brand-color z-10 absolute top-1/2 -left-8 -translate-y-1/2`}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowBack size={30} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
  };
  return (
    <div className="container mx-auto py-8">
      <Title>Kampanyalar</Title>
      <Slider className="-mx-2" {...settings}>
        {banners.length &&
          banners.map((banner, index) => (
            <div key={banner.id}>
              <picture className="block px-2">
                <img src={banner.image} alt="" className="rounded-lg" />
              </picture>
            </div>
          ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
