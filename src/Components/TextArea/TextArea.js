import React from "react";
import { ReactComponent as Alert } from "../../Assets/emoji-sad.svg";
import { ReactComponent as Check } from "../../Assets/input-check.svg";
import { ReactComponent as Dragger } from "../../Assets/dragger.svg";

// import "./textarea.scss";

export default function TextArea(props) {
  return (
    <div className={`textarea-container ${props.margin}`}>
      {props.variant === "error" ? (
        <span className="alert-icon">
          <Alert />
        </span>
      ) : props.variant === "success" ? (
        <span className="check-icon">
          <Check />
        </span>
      ) : null}
      <textarea
        placeholder={props.placeholder}
        className={`textarea textarea--${props.variant}`}
        disabled={props.variant === "disabled"}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <span className="dragger-icon">
        <Dragger />
      </span>
    </div>
  );
}
