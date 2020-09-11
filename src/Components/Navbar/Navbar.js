import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 90);

  return (
    <div className="nav">
      <nav>
        {props.links.map((item, index) => {
          return (
            <h4
              onClick={() => scrollToRef(props.refs[index])}
              key={index}
              className="mb-6"
            >
              {item}
            </h4>
          );
        })}
        <Link to="/demo">Demo</Link>
      </nav>
    </div>
  );
}
