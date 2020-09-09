import React from "react";
// import "./select.scss";
import { ReactComponent as Arrow } from "../../Assets/select.svg";

export default function Select(props) {
  return (
    <div className="select-container">
      <select
        disabled={props.variant === "disabled"}
        className={`select select--${props.variant}`}
      >
        {props.options.map((item, index) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
      <Arrow />
    </div>
  );
}
