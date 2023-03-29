import React from "react";

const SliderGridItem = ({ icon: Icon, header, description }) => {
  return (
    <div className="sliderGridItem">
      <div className="sliderGridItem__icon">
        <Icon />
      </div>
      <div className="sliderGridItem__header">{header}</div>
      <div className="sliderGridItem__description">{description}</div>
    </div>
  );
};

export default SliderGridItem;
