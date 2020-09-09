import React from "react";

export default function Color(props) {
  return (
    <div className="color mr-4 mb-4">
      <div className={`color--header color--${props.name}`}></div>
      <p className="color__name">{props.name}</p>
      <p className="color__value">{props.value}</p>
    </div>
  );
}
