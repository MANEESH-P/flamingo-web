import React, { useRef } from "react";
import Color from "../../Components/Color/Color";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

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
      <div className="foundations pl-12 pt-8 pb-8 pr-8">
        <div>
          <header>
            <h1 className="mb-4">Foundations</h1>
            <Link className="mb-4" to="/elements">
              <span>Elements</span>
            </Link>
          </header>
          <p className="mb-16 text-secondary">
            Here’s the very basic for Flamingo Web, either being color variables
            or text identification.
          </p>
        </div>
        <h2 className="mb-6">Colors</h2>
        <div ref={colorsRef} className="mb-8">
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
        <h2 className="mb-6">Typography</h2>
        <div ref={typographyRef} className="mb-8">
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
        <h2 className="mb-6">Shadows</h2>
        <div ref={shadowRef} className="mb-8">
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
