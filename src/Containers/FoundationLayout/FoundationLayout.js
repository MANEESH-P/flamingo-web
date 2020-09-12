import React, { useRef } from "react";
import Color from "../../Components/Color/Color";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - 32);

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default function FoundationLayout() {
  const colorsRef = useRef(null);
  const typographyRef = useRef(null);
  const shadowRef = useRef(null);
  return (
    <div className="foundation-layout">
      <Navbar
        links={["01. Colors", "02. Typography", "03. Shadow"]}
        refs={[colorsRef, typographyRef, shadowRef]}
      />

      <span className="hamburger" onClick={openNav}>
        <svg
          height="16px"
          viewBox="0 -53 384 384"
          width="16px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
        </svg>
      </span>

      <div id="myNav" class="overlay">
        <p class="closebtn" onClick={closeNav}>
          &times;
        </p>
        <div class="overlay-content">
          <p
            onClick={() => {
              scrollToRef(colorsRef);
              closeNav();
            }}
            href="#"
          >
            01.Colors
          </p>
          <p
            onClick={() => {
              scrollToRef(typographyRef);
              closeNav();
            }}
            href="#"
          >
            02.Typography
          </p>
          <p
            onClick={() => {
              scrollToRef(shadowRef);
              closeNav();
            }}
            href="#"
          >
            03.Shadows
          </p>
          <Link to="/elements">
            <p>Elements</p>
          </Link>
          <Link to="/demo">
            <p>Demo Page</p>
          </Link>
        </div>
      </div>
      <div className="foundations pl-12 pt-8 pb-8 pr-8">
        <div>
          <header>
            <h1 className="mb-4">Foundations</h1>
          </header>
          <p className="mb-16 text-secondary">
            Here’s the very basic for Flamingo Web, either being color variables
            or text identification.
          </p>
        </div>
        <h2 ref={colorsRef} className="mb-6">
          Colors
        </h2>
        <div className="mb-8">
          <h3 className="mb-4">Brand</h3>
          <div className="brand mr-1">
            <Color name="brand-primary" value="#FF2773" />
            <Color name="brand-primary-light" value="#FF2773" />
            <Color name="brand-secondary" value="#FF2773" />
            <Color name="brand-secondary-light" value="#FF2773" />
          </div>
          <h3 className="mb-4">UI Text</h3>
          <div className="ui-text mr-1">
            <Color name="text-primary" value="#FF2773" />
            <Color name="text-secondary" value="#FF2773" />
            <Color name="text-tertiary" value="#FF2773" />
            <Color name="text-success" value="#FF2773" />
            <Color name="text-error" value="#FF2773" />
            <Color name="text-white" value="#FF2773" />
            <Color name="text-link" value="#FF2773" />
          </div>
          <h3 className="mb-4">UI Element</h3>
          <div className="ui-element mr-1">
            <Color name="element-primary" value="#FF2773" />
            <Color name="element-secondary" value="#FF2773" />
            <Color name="element-tertiary" value="#FF2773" />
            <Color name="element-success" value="#FF2773" />
            <Color name="element-error" value="#FF2773" />
            <Color name="element-overlay" value="#FF2773" />
          </div>
        </div>
        <h2 ref={typographyRef} className="mb-6">
          Typography
        </h2>
        <div className="mb-8">
          <div className="typography">
            <div className="headings">
              <h1 className="mb-6">Heading 1</h1>
              <h2 className="mb-6">Heading 2</h2>
              <h3 className="mb-6">Heading 3</h3>
              <h4 className="mb-6">Heading 4</h4>
              <h5 className="mb-6">Heading 5</h5>
              <h6 className="mb-6">Heading 6</h6>
            </div>
            <div className="misc">
              <p className="mb-6">Paragraph</p>
              <p className="mb-6 bold">Paragraph Bold</p>
              <a className="mb-6" href="#">
                Link
              </a>
            </div>
          </div>
        </div>
        <h2 ref={shadowRef} className="mb-6">
          Shadows
        </h2>
        <div className="mb-8">
          <div className="shadows">
            <div className="shadow--b-0 mr-4 mb-4"></div>
            <div className="shadow--b-1 mr-4 mb-4"></div>
            <div className="shadow--b-2 mr-4 mb-4"></div>
            <div className="shadow--t-0 mr-4 mb-4"></div>
            <div className="shadow--t-1 mr-4 mb-4"></div>
            <div className="shadow--t-2 mr-4 mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
