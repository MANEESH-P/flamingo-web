import React from "react";
import { ReactComponent as Loading } from "../../Assets/loader.svg";
import { ReactComponent as Checked } from "../../Assets/check.svg";
import { ReactComponent as Failure } from "../../Assets/failure.svg";
// import "./button.scss";
export default function Button(props) {
  return (
    <button
      className={`btn btn--${props.variant} btn--${props.variant}-${
        props.type
      } ${props.loading ? "btn--loading" : ""} ${
        props.active ? "btn--active" : ""
      } ${props.hover ? "btn--hover" : ""} ${props.margin} ${props.shadow}`}
    >
      {props.loading ? (
        <Loading />
      ) : props.variant === "success" ? (
        <Checked />
      ) : props.variant === "error" ? (
        <Failure />
      ) : (
        props.label
      )}
    </button>
  );
}
