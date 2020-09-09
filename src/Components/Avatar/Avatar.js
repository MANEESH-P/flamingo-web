import React from "react";
// import "./avatar.scss";

export default function Avatar(props) {
  return (
    <div className={`avatar--${props.size}`}>
      {props.img ? (
        <img
          className={`avatar ${props.margin} shadow--b-2`}
          src={props.img}
          alt="avatar"
        />
      ) : (
        props.children
      )}
    </div>
  );
}
