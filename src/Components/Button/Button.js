import React from "react";
import { ReactComponent as Loading } from "../../Assets/loader.svg";
import { ReactComponent as Checked } from "../../Assets/check.svg";
import { ReactComponent as Failure } from "../../Assets/failure.svg";
// import "./button.scss";
export default function Button(props) {
  const { variant = "primary", type = "default", ...rest } = props;

  return (
    <button
      className={`btn btn--${variant} btn--${variant}-${type} ${
        props.loading ? "btn--loading" : ""
      } ${props.active ? "btn--active" : ""} ${
        props.hover ? "btn--hover" : ""
      } ${props.margin} ${props.shadow}`}
      // className={className}
    >
      {props.loading ? (
        <Loading />
      ) : variant === "success" ? (
        <Checked />
      ) : variant === "error" ? (
        <Failure />
      ) : (
        props.label
      )}
    </button>
  );
}
