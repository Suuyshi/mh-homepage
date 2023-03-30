import React, { useState, useEffect } from "react";

import Spinner from "react-bootstrap/Spinner";

import "./assets/App.css";
import FormModal from "./components/Modal";
import FormPage from "./containers/FormPage";
import HomePage from "./containers/HomePage";
import InfoPage from "./containers/InfoPage";
import SliderPage from "./containers/SliderPage";

function App() {
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <div className="d-flex justify-content-center align-items-center spinner-page">
      <Spinner animation="grow" variant="light" className="me-3" />
      <Spinner animation="grow" className="me-3" />
      <Spinner animation="grow" variant="light" className="me-3" />
      <Spinner animation="grow" className="me-3" />
    </div>
  ) : (
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
