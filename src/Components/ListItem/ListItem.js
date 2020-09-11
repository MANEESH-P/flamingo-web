import React from "react";
import { ReactComponent as Arrow } from "../../Assets/Union.svg";
import { ReactComponent as ArrowLight } from "../../Assets/Union-medium.svg";

export default function ListItem(props) {
  return (
    <div className={`list-item ${props.variant} ${props.margin} shadow--b-1`}>
      <div className="list-item__icon">{props.icon}</div>
      <div>
        <div className="list-item__title">
          <p>{props.title}</p>
        </div>
        <div className="list-item__subtitle">
          <p>{props.subtitle}</p>
        </div>
      </div>
      <div className="list-item__value">
        <p>{props.value}</p>
      </div>
      <div className="list-item__arrow">
        {props.variant === "tiny-item" ? <ArrowLight /> : <Arrow />}
      </div>
    </div>
  );
}
