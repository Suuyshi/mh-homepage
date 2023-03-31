import React, { useState } from "react";
import { SLIDER_ITEMS } from "../../constants/sliderItems";

const SliderResponsive = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

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

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container-responsive">
      <div className="slider-container-responsive__dots">
        {handleSliderDots()}
      </div>
      {SLIDER_ITEMS.map(({ id, icon: Icon, header, description }) => (
        <div
          className={`sliderGridItem-responsive ${
            currentSlide === id ? "selected-grid-responsive" : ""
          }`}
        >
          <div className="sliderGridItem-responsive__text">
            <div className="sliderGridItem__icon mb-2">
              <Icon />
            </div>
            <div className="sliderGridItem__header">{header}</div>
            <div className="sliderGridItem__description ms-4">
              {description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderResponsive;
