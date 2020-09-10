import React, { useEffect } from "react";
// import "./checkbox.scss";

export default function Checkbox(props) {
  useEffect(() => {
    if (props.indeterminate) {
      let checkbox = document.getElementById(props.label);
      checkbox.indeterminate = true;
    }
  });
  return (
    <div className="checkbox-container mt-4 ">
      <input
        readOnly={props.checked}
        checked={props.checked}
        type="checkbox"
        id={props.label}
        disabled={props.disabled}
      />
      <label
        className={`checkbox checkbox--${props.variant} ${
          props.hover ? "hover" : ""
        } ${props.checked ? "checked" : ""}`}
        htmlFor={props.label}
      >
        <span>{props.label}</span>
      </label>
    </div>
  );
}
