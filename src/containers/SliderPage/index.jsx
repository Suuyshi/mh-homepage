import React from "react";
import Slider from "../../components/Slider";

const SliderPage = () => {
  return (
    <div className="sliderpage">
      <div className="sliderpage__leftpart">
        <div className="sliderpage__header">
          <div className="sliderpage__header--part1">Discover Lifestyle</div>
          <div className="sliderpage__header--part2">Amentities</div>
        </div>
        <div className="sliderpage__description">
          Occupying a land area of 33,000 square meters, Makadi Heights’
          stunning clubhouse
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default SliderPage;
