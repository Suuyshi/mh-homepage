import React from "react";

const SliderGridItem = ({
  icon: Icon,
  header,
  description,
  image: Image,
  id,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div
      className={`sliderGridItem ${
        currentSlide === id ? "selected-slide" : ""
      }`}
      onClick={() => setCurrentSlide(id)}
    >
      <div className="sliderGridItem__icon mb-2">
        <Icon />
      </div>
      <div className="sliderGridItem__header">{header}</div>
      <div className="sliderGridItem__description ms-4">{description}</div>
      <div
        className={`sliderGridItem__image ${
          currentSlide !== id ? "current-image-slide" : "old-image-slide"
        }`}
      >
        <img src={Image} alt="sliderimage" id={id} />
      </div>
    </div>
  );
};

export default SliderGridItem;
