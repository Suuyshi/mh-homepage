import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "../Button";
import ModalInfoList from "../ModalInfo";

const FormModal = ({ setShow, show, setFormValues, formValues }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-body__title">
          You are about to submit the following Details:
        </div>
        <div className="modal-body__content">
          <ModalInfoList {...formValues} />
          {/* {formValues &&
            Object.keys(formValues).map((objectKey, index) => {
              return (
                <div key={index}>
                  {objectKey}: {formValues[objectKey]}
                </div>
              );
            })} */}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button buttonType="dark-btn" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
