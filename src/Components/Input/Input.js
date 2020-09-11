import React from "react";
// import "./input.scss";
import { ReactComponent as Alert } from "../../Assets/alert.svg";
import { ReactComponent as Check } from "../../Assets/input-check.svg";
import { ReactComponent as Blind } from "../../Assets/blind-user.svg";
import { ReactComponent as Calendar } from "../../Assets/calendar.svg";
import { ReactComponent as Search } from "../../Assets/search.svg";

export default function Input(props) {
  let className = `input input--${props.variant} ${
    props.active ? "active" : ""
  } ${props.hover ? "hover" : ""} ${props.disabled ? "disabled" : ""}`;
  return (
    <div className={`input-container ${props.margin}`}>
      <input
        className={className}
        placeholder={props.placeholder}
        type={props.type}
        disabled={props.disabled}
        id={`inout-${props.placeholder}`}
      />
      <label htmlFor={`inout-${props.placeholder}`}>
        {props.variant === "error" ? (
          <Alert />
        ) : props.variant === "success" ? (
          <Check />
        ) : props.variant === "password" || props.type === "password" ? (
          <Blind />
        ) : props.variant === "date" || props.type === "date" ? (
          <Calendar />
        ) : props.variant === "search" ? (
          <Search />
        ) : null}
      </label>
    </div>
  );
}
