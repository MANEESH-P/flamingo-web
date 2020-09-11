import React from "react";
// import "./radiobutton.scss";

export default function RadioButton(props) {
  return (
    <label
      class={`radiobutton-container ${props.margin}`}
      htmlFor={`radio-${props.label}`}
    >
      {props.label}
      <input
        type="radio"
        checked={props.checked}
        disabled={props.disabled}
        name={props.name}
        id={`radio-${props.label}`}
      />
      <span
        className={`checkmark radio ${props.variant}  ${
          props.disabled ? "disabled" : ""
        } ${props.checked ? "checked" : ""} ${props.hover ? "hover" : ""}`}
      ></span>
    </label>
  );
}
