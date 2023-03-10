import React from "react";
import "../Form/formGroup.css";

function FormGroup(props) {
  return (
    <div className="formGroup">
      <label className="formLabel">{props.label}</label>

      <input
        className="formInput"
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.errors && <p style={{ color: "red" }}>{props.errors}</p>}
    </div>
  );
}

export default FormGroup;
