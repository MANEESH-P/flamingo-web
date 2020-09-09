import React from "react";
// import "./toggle.scss";
export default function Toggle(props) {
  return (
    <div className="toggle-container mt-4">
      <label id="switch" className="switch">
        <input
          disabled={props.disabled}
          checked={props.checked}
          type="checkbox"
          className={`toggle ${props.hover ? "hover" : ""} ${
            props.checked ? "checked" : ""
          }`}
          id="slider"
        />
        <span
          className={`slider round toggle ${props.hover ? "hover" : ""} ${
            props.checked ? "checked" : ""
          } ${props.disabled ? "disabled" : ""}`}
        ></span>
      </label>
      <span className="label">{props.label}</span>
    </div>
  );
}
