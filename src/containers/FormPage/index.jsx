import React, { useState } from "react";
import Form from "../../components/Form";
import FormImage from "../../assets/images/formImage.png";

const FormPage = ({ setShow, show, setFormValues, formValues }) => {
  return (
    <div className="formpage">
      <div className="formpage__title">Ready for a Home at </div>
      <div className="formpage__header">Makadi Heights</div>
      <img src={FormImage} alt="form" />
      <Form
        setShow={setShow}
        show={show}
        setFormValues={setFormValues}
        formValues={formValues}
      />
    </div>
  );
};

export default FormPage;
