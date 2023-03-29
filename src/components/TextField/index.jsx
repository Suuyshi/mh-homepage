import React, { useEffect, useState } from "react";

const TextField = ({
  id,
  value,
  placeholder,
  handleChange,
  handleBlur,
  errorToggle,
  errorText,
}) => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!value || value.length < 1) {
      setHovered(false);
    }
  }, [value]);

  return (
    <div className="text-field-component m-3 ms-0">
      <input
        id={id}
        placeholder={placeholder}
        autoComplete="off"
        type="text"
        className={`text-field-component__input ${
          hovered ? "input-hovered" : ""
        }`}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onMouseOver={() => {
          if (value && value.length > 0) {
            setHovered(true);
          } else {
            setHovered(false);
          }
        }}
        onMouseLeave={() => setHovered(false)}
      />
      {errorToggle && errorText ? (
        <p style={{ color: "red" }}> {errorText} </p>
      ) : null}
    </div>
  );
};

export default TextField;
