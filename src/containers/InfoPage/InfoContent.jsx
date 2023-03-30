import React, { useEffect } from "react";
import InfoImage from "../../assets/images/InfoImage.png";
import Button from "../../components/Button";

const InfoContent = () => {
  return (
    <div className="infocontent">
      <img
        src={InfoImage}
        alt="infoImage"
        data-aos="fade-in"
        data-aos-offset="10"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      />
      <div className="infocontent__description ms-5">
        <div
          className="infocontent__description--header"
          data-aos="fade-left"
          data-aos-offset="10"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <div className="header__part1">The place</div>
          <div className="header__part2">we call home</div>
        </div>
        <div
          className="infocontent__description--content my-5"
          data-aos="fade-right"
          data-aos-offset="10"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          Makadi Heights is a town built over 3.4 million square meters planned
          for development, with an elevation reaching 78 meters above sea level
          guaranteeing magnificent panoramic sea views residential units.
          Envisioned as a comprehensive town.
        </div>
        <div
          className="infocontent__description--actions my-5 "
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
        >
          <Button buttonType="light-btn">Download brochure</Button>
          <Button buttonType="light-btn" className="ms-5">
            Show Master plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InfoContent;
