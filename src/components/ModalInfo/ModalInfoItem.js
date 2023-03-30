import React from "react";

const ModalInfoItem = ({ itemKey, itemValue }) => {
  return (
    <div className="modal-info-item m-3">
      <div className="modal-info-key">{itemKey} </div> :{" "}
      <div className="modal-info-value"> {itemValue}</div>
    </div>
  );
};

export default ModalInfoItem;
