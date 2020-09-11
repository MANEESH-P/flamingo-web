import React from "react";
// import "./select.scss";

export default function Select(props) {
  return (
    <div className={`select-container ${props.margin}`}>
      <select
        disabled={props.variant === "disabled"}
        className={`select select--${props.variant}`}
        id={`select--${props.variant}`}
      >
        {props.options.map((item, index) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      {/* <label for={`select--${props.variant}`}>
        <Arrow />
      </label> */}
    </div>
  );
}
