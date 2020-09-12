import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 90);
  let location = useLocation();
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
        {location.pathname === "/" ? (
          <>
            <Link to="/elements">Elements</Link>
            <br />
            <br />
            <Link to="/demo">Demo</Link>
          </>
        ) : (
          <>
            <Link to="/">Foundations</Link>
            <br />
            <br />
            <Link to="/demo">Demo</Link>
          </>
        )}
      </nav>
    </div>
  );
}
