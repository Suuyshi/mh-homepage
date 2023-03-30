import React, { useEffect } from "react";
import Slider from "../../components/Slider";

import AOS from "aos";
import "aos/dist/aos.css";
import SliderResponsive from "../../components/Slider/SliderResponsive";

const SliderPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="sliderpage">
      <div className="sliderpage__leftpart">
        <div
          className="sliderpage__header"
          data-aos="fade-left"
          data-aos-offset="10"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className=" header__part1">Discover Lifestyle</div>
          <div className=" header__part2">Amentities</div>
        </div>
        <div
          className="sliderpage__description"
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          Occupying a land area of 33,000 square meters, Makadi Heights’
          stunning clubhouse
        </div>
      </div>
      <SliderResponsive />
      <Slider />
    </div>
  );
};

export default SliderPage;
