import React from "react";

const FormRow = ({
  type,
  name,
  value,
  changeHandler,
  placeholder,
  showLabel,
}) => {
  return (
    <div className="form-group">
      {showLabel && <label>{name}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
