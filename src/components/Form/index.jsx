import React from "react";

import { withFormik, Field } from "formik";

import schema from "../../validation schemas/formSchema";

import TextField from "../../components/TextField";
import Button from "../Button";

import "aos/dist/aos.css";

const Form = ({
  show,
  setShow,
  setFormValues,
  formValues,
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  ...props
}) => {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="30"
        data-aos-duration="1000"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <div className="form__title">
          Enter your details and our representative will get back to you shortly
        </div>
        <div className="form__fields">
          <TextField
            placeholder={"Your name"}
            id="name"
            handleChange={handleChange}
            value={values.name}
            errorToggle={touched.name && errors.name ? true : false}
            errorText={errors.name}
            data-aos="fade-up"
            data-aos-offset="10"
            data-aos-delay="30"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center"
          />
          <TextField
            placeholder={"Email ID"}
            id="email"
            handleChange={handleChange}
            value={values.email}
            errorToggle={touched.email && errors.email ? true : false}
            errorText={errors.email}
          />
          <TextField
            placeholder={"Phone number"}
            id="phoneNumber"
            handleChange={handleChange}
            value={values.phoneNumber}
            errorToggle={
              touched.phoneNumber && errors.phoneNumber ? true : false
            }
            errorText={errors.phoneNumber}
          />
          <TextField
            placeholder={"Choose your budget"}
            id="budget"
            handleChange={handleChange}
            value={values.budget}
            errorToggle={touched.budget && errors.budget ? true : false}
            errorText={errors.budget}
          />
          <TextField
            placeholder={"Enter you message"}
            id="message"
            handleChange={handleChange}
            value={values.message}
            errorToggle={touched.message && errors.message ? true : false}
            errorText={errors.message}
          />
          <input
            type={"checkbox"}
            className="mt-5"
            id="consent"
            value={values.consent}
          />
          <label htmlFor="consent" className="ms-1">
            {" "}
            I agree to the processing of personal data
          </label>
        </div>

        <div className="form__actions mt-4">
          <Button buttonType="dark-btn" className="mt-4" type="submit">
            leave a Call request
          </Button>
        </div>
      </form>
    </>
  );
};

export const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    phoneNumber: "",
    budget: "",
    message: "",
  }),
  validationSchema: schema,
  handleSubmit: (val, { props, resetForm }) => {
    props.setShow(true);
    props.setFormValues(val);
    resetForm();
  },
})(Form);

export default EnhancedForm;
