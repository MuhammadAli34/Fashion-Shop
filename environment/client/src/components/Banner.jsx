import React, { useState } from "react";
import { banner1, banner2, banner3, banner4 } from "../assets";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
          }}
          className="w-[400vw] h-full flex transition-transform duration-1000 "
        >
          <img
            src={banner1}
            alt="banner1"
            className="w-screen object-cover"
            loading="priority"
          />

          <img src={banner2} alt="banner2" className="w-screen object-cover" />
          <img src={banner3} alt="banner3" className="w-screen object-cover" />
          <img src={banner4} alt="banner4" className="w-screen object-cover" />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover-cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover-cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
