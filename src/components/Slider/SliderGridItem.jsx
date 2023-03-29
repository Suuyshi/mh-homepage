import React from "react";

const SliderGridItem = ({ icon: Icon, header, description }) => {
  return (
    <div className="sliderGridItem">
      <div className="sliderGridItem__icon mb-2">
        <Icon />
      </div>
      <div className="sliderGridItem__header">{header}</div>
      <div className="sliderGridItem__description ms-4">{description}</div>
    </div>
  );
};

export default SliderGridItem;
