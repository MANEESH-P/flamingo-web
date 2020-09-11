import React, { useEffect } from "react";
// import "./checkbox.scss";

export default function Checkbox(props) {
  useEffect(() => {
    if (props.indeterminate) {
      let checkbox = document.getElementById(`checkbox-${props.label}`);
      checkbox.indeterminate = true;
    }
  });
  return (
    <div className={`checkbox-container ${props.margin}`}>
      <input
        readOnly={props.checked}
        checked={props.checked}
        type="checkbox"
        id={`checkbox-${props.label}`}
        disabled={props.disabled}
      />
      <label
        className={`checkbox checkbox--${props.variant} ${
          props.hover ? "hover" : ""
        } ${props.checked ? "checked" : ""}`}
        htmlFor={`checkbox-${props.label}`}
      >
        <span>{props.label}</span>
      </label>
    </div>
  );
}
