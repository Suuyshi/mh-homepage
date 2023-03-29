import React from "react";
import Form from "../../components/Form";
import FormImage from "../../assets/images/formImage.png";

const FormPage = () => {
  return (
    <div className="formpage">
      <div className="formpage__title">Ready for a Home at </div>
      <div className="formpage__header">Makadi Heights</div>
      <img src={FormImage} alt="form" />
      <Form />
    </div>
  );
};

export default FormPage;
