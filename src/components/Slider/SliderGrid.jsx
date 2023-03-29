import React from "react";
import SliderGridItem from "./SliderGridItem";
import { SLIDER_ITEMS } from "../../constants/sliderItems";

const SliderGrid = () => {
  const handleSliderGridItems = () => {
    let content = [];
    for (let i = 0; i < SLIDER_ITEMS.length; i = i + 2) {
      const firstItem = SLIDER_ITEMS[i];
      const secondItem = SLIDER_ITEMS[i + 1];
      content.push(
        <div className="m-3 d-flex" key={`${firstItem.id}-${secondItem.id}`}>
          <SliderGridItem key={firstItem.id} {...firstItem} />
          <SliderGridItem key={secondItem.id} {...secondItem} />
        </div>
      );
    }

    return content;
  };
  return (
    <div className="sliderGrid mt-5">
      <div className="sliderGrid__divider"></div>
      {handleSliderGridItems()}
    </div>
  );
};

export default SliderGrid;
