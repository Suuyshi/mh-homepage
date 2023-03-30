import React, { useState } from "react";
import "./assets/App.css";
import FormModal from "./components/Modal";
import FormPage from "./containers/FormPage";
import HomePage from "./containers/HomePage";
import InfoPage from "./containers/InfoPage";
import SliderPage from "./containers/SliderPage";

function App() {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(null);

  return (
    <div>
      <HomePage />
      <InfoPage />
      <SliderPage />
      <FormModal
        setShow={setShow}
        show={show}
        formValues={formValues}
        setFormValues={setFormValues}
      />
      <FormPage
        setShow={setShow}
        show={show}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </div>
  );
}

export default App;
