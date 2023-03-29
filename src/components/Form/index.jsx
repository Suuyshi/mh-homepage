import React from "react";
import TextField from "../../components/TextField";
import Button from "../Button";

const Form = () => {
  return (
    <form>
      <div className="form__title">
        Enter your details and our representative will get back to you shortly
      </div>
      <div className="form__fields">
        <TextField placeholder={"Your name"} id="name" />
        <TextField placeholder={"Email ID"} id="email" />
        <TextField placeholder={"Phone number"} id="phoneNumber" />
        <TextField placeholder={"Choose your budget"} id="budget" />
        <TextField placeholder={"Enter you message"} id="message" />
        <input type={"checkbox"} className="mt-5" id="consent" />
        <label for="consent" className="ms-1">
          {" "}
          I agree to the processing of personal data
        </label>
      </div>

      <div className="form__actions mt-4">
        <Button buttonType="dark-btn" className="mt-4">
          leave a Call request
        </Button>
      </div>
    </form>
  );
};

export default Form;
