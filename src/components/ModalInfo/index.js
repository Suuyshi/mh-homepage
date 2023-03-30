import React from "react";
import ModalInfoItem from "./ModalInfoItem";

const ModalInfoList = ({ ...info }) => {
  return (
    <div className="modal-info-list">
      {info &&
        Object.keys(info).map((objectKey, index) => {
          return (
            <ModalInfoItem itemKey={objectKey} itemValue={info[objectKey]} />
          );
        })}
    </div>
  );
};

export default ModalInfoList;
