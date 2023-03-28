import React from "react";
import InfoImage from "../../assets/images/InfoImage.png";
import Button from "../../components/Button";

const InfoContent = () => {
  return (
    <div className="infocontent">
      <img src={InfoImage} alt="infoImage" />
      <div className="infocontent__description ms-5">
        <div className="infocontent__description--header">
          The place
          <br />
          we call home
        </div>
        <div className="infocontent__description--content my-5">
          Makadi Heights is a town built over 3.4 million square meters planned
          for development, with an elevation reaching 78 meters above sea level
          guaranteeing magnificent panoramic sea views residential units.
          Envisioned as a comprehensive town.
        </div>
        <div className="infocontent__description--actions my-5">
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
