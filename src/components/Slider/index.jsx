import React, { useEffect, useState } from "react";
import { SLIDER_ITEMS } from "../../constants/sliderItems";
import SliderGrid from "./SliderGrid";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSliderDots = () => {
    let content = [];
    for (let i = 0; i < SLIDER_ITEMS.length; i++) {
      content.push(
        <div
          className={`slider-container__dot ms-1 ${
            currentSlide === i + 1 ? "selected-dot" : ""
          }`}
          key={i}
          onClick={() => changeSlide(i + 1)}
        />
      );
    }
    return content;
  };

  return (
    <div className="slider-container">
      <SliderGrid
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
      <div className="slider-container__dots">{handleSliderDots()}</div>
    </div>
  );
};

export default Slider;
