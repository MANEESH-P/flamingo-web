import React, { useRef } from "react";
import { ReactComponent as Icon } from "../../Assets/placeholder.svg";
import { Link } from "react-router-dom";
import user from "../../Assets/user.png";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import Select from "../../Components/Select/Select";
import TextArea from "../../Components/TextArea/TextArea";
import Checkbox from "../../Components/Checkbox/Checkbox";
import RadioButton from "../../Components/RadioButton/RadioButton";
import Toggle from "../../Components/Toggle/Toggle";
import Avatar from "../../Components/Avatar/Avatar";
import ListItem from "../../Components/ListItem/ListItem";
import Navbar from "../../Components/Navbar/Navbar";

const scrollToRef = (ref) => {
  // let top = ref.current.offsetTop - 32;
  window.scrollTo(0, ref.current.offsetTop - 32);
};

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

export default function ElementsLayout() {
  const buttonsRef = useRef(null);
  const inputsRef = useRef(null);
  const selectRef = useRef(null);
  const textareaRef = useRef(null);
  const checkboxRef = useRef(null);
  const radioRef = useRef(null);
  const toggleRef = useRef(null);
  const listitemRef = useRef(null);
  const avatarRef = useRef(null);

  return (
    <div className="home-layout">
      <Navbar
        links={[
          "01. Buttons",
          "02. Inputs",
          "03. Select",
          "04. Textarea",
          "05. Checkboxes",
          "06. Radio Buttons",
          "07. Toggles",
          "08. List Items",
          "09. Avatars",
        ]}
        refs={[
          buttonsRef,
          inputsRef,
          selectRef,
          textareaRef,
          checkboxRef,
          radioRef,
          toggleRef,
          listitemRef,
          avatarRef,
        ]}
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
              scrollToRef(buttonsRef);
              closeNav();
            }}
            href="#"
          >
            01.Buttons
          </p>
          <p
            onClick={() => {
              scrollToRef(inputsRef);
              closeNav();
            }}
            href="#"
          >
            02.Inputs
          </p>
          <p
            onClick={() => {
              scrollToRef(selectRef);
              closeNav();
            }}
            href="#"
          >
            03.Select
          </p>
          <p
            onClick={() => {
              scrollToRef(textareaRef);
              closeNav();
            }}
            href="#"
          >
            04.Textarea
          </p>
          <p
            onClick={() => {
              scrollToRef(checkboxRef);
              closeNav();
            }}
            href="#"
          >
            05.Checkbox
          </p>
          <p
            onClick={() => {
              scrollToRef(radioRef);
              closeNav();
            }}
            href="#"
          >
            06.Radio Buttons
          </p>
          <p
            onClick={() => {
              scrollToRef(toggleRef);
              closeNav();
            }}
            href="#"
          >
            07.Toggles
          </p>
          <p
            onClick={() => {
              scrollToRef(listitemRef);
              closeNav();
            }}
            href="#"
          >
            08.List Items
          </p>

          <p
            onClick={() => {
              scrollToRef(avatarRef);
              closeNav();
            }}
            href="#"
          >
            09.Avatars
          </p>
        </div>
      </div>

      <div className="components pl-12 pt-8 pb-8 pr-8">
        <div>
          <header className="mb-4">
            <h1>Elements</h1>
            <Link to="/">
              <span>Foundations</span>
            </Link>
          </header>
          <p className="mb-16 text-secondary">
            Here’s the collection of Atomic elements for Flamingo Web. These
            elements don’t include margin as they are meant to be easily
            adaptable to several compositions and layouts.
          </p>
        </div>
        <h2 ref={buttonsRef} className="mb-4">
          Buttons
        </h2>
        <div className="container">
          <div className="primary-buttons mr-1 mb-8">
            <h3 className="mb-2">Primary</h3>
            <Button
              variant="primary"
              type="default"
              label="Label"
              margin="mr-6"
            ></Button>
            <Button
              variant="primary"
              type="outline"
              label="Label"
              margin="mr-6"
            ></Button>
            <Button
              variant="primary"
              type="minimal"
              label="Label"
              margin="mr-6"
            ></Button>
          </div>
          <div className="secondary-buttons mr-1 mb-8">
            <h3 className="mb-2">Secondary</h3>
            <Button
              variant="secondary"
              type="default"
              label="Label"
              margin="mr-6"
            ></Button>
            <Button
              variant="secondary"
              type="outline"
              label="Label"
              margin="mr-6"
            ></Button>
            <Button
              variant="secondary"
              type="minimal"
              label="Label"
              margin="mr-6"
            ></Button>
          </div>
          <div className="icon-buttons mr-1 mb-8">
            <h3 className="mb-2">Icons</h3>
            <Button variant="icon" label={<Icon />} margin="mr-6"></Button>
          </div>
        </div>
        <h3 className="mb-4">States</h3>
        <div className="container ">
          <div className="primary-button mb-8">
            <h3 className="mb-2">Primary</h3>
            <div className="buttons">
              <Button
                variant="primary"
                type="default"
                label="Label"
                hover={true}
                loading={false}
                margin="mr-6"
              ></Button>
              <Button
                variant="primary"
                type="default"
                active={true}
                label="Label"
                loading={false}
                margin="mr-6"
              ></Button>
              <Button
                variant="primary"
                type="default"
                label="Label"
                loading={true}
                margin="mr-6"
              ></Button>
            </div>
          </div>
          <div className="secondary-button mb-8">
            <h3 className="mb-2">Secondary</h3>
            <div className="buttons">
              <Button
                variant="secondary"
                type="default"
                label="Label"
                hover={true}
                loading={false}
                margin="mr-6"
              ></Button>
              <Button
                variant="secondary"
                type="default"
                label="Label"
                active={true}
                loading={false}
                margin="mr-6"
              ></Button>
              <Button
                variant="secondary"
                type="default"
                label="Label"
                loading={true}
                margin="mr-6"
              ></Button>
            </div>
          </div>
          <div className="success mb-8">
            <h3 className="mb-2">Success</h3>
            <Button
              variant="success"
              type="default"
              label="Label"
              margin="mr-6"
            ></Button>
          </div>
          <div className="Error mb-8">
            <h3 className="mb-2">Error</h3>
            <Button
              variant="error"
              type="default"
              label="Label"
              margin="mr-6"
            ></Button>
          </div>
          <div className="Disable mb-8">
            <h3 className="mb-2">Disable</h3>
            <Button
              variant="disabled"
              type="default"
              label="Label"
              margin="mr-6"
            ></Button>
          </div>
        </div>
        <h2 ref={inputsRef} className="mb-4">
          Input
        </h2>
        <div className="container mb-8">
          <div className="input-types">
            <h3 className="mb-2">Types</h3>
            <div className="inputs">
              <Input
                type="text"
                variant="normal"
                placeholder="Normal"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="hover"
                hover={true}
                placeholder="Hover"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="active"
                active={true}
                placeholder="Active"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="error"
                placeholder="Error"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="success"
                placeholder="Success"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="disabled"
                disabled={true}
                placeholder="Disabled"
                margin="mr-6 mb-6"
              />
              <Input
                type="password"
                variant="password"
                placeholder="********"
                margin="mr-6 mb-6"
              />
              <Input
                type="date"
                variant="date"
                placeholder="dd/mm/yy"
                margin="mr-6 mb-6"
              />
              <Input
                type="text"
                variant="search"
                placeholder="Search"
                margin="mr-6 mb-6"
              />
            </div>
          </div>
        </div>
        <h2 ref={selectRef} className="mb-4">
          Select
        </h2>
        <div className="container mb-8">
          <div className="select-types">
            <h3 className="mb-2">States</h3>
            <div className="selects">
              <div>
                <Select
                  variant="normal"
                  options={["normal", "one", "two", "three"]}
                  margin="mr-6 mb-6"
                />
                <Select
                  variant="hover"
                  options={["hover", "one", "two", "three"]}
                  margin="mr-6 mb-6"
                />
              </div>
              <div>
                <Select
                  variant="active"
                  options={["active", "one", "two", "three"]}
                  margin="mr-6 mb-6"
                />
                <Select
                  variant="disabled"
                  options={["disable", "one", "two", "three"]}
                  margin="mr-6 mb-6"
                />
              </div>
            </div>
          </div>
        </div>
        <h2 ref={textareaRef} className="mb-4">
          Textarea
        </h2>
        <div className="container mb-8">
          <div className="textarea-types">
            <h3 className="mb-2">Types</h3>
            <div className="textareas">
              <TextArea
                variant="normal"
                placeholder="Normal"
                margin="mr-6 mb-6"
              />
              <TextArea
                variant="hover"
                placeholder="Hover"
                margin="mr-6 mb-6"
              />
              <TextArea
                variant="active"
                placeholder="Active"
                margin="mr-6 mb-6"
              />
              <TextArea
                variant="error"
                placeholder="Error"
                margin="mr-6 mb-6"
              />
              <TextArea
                variant="success"
                placeholder="Success"
                margin="mr-6 mb-6"
              />
              <TextArea
                variant="disabled"
                placeholder="Disable"
                margin="mr-6 mb-6"
              />
            </div>
          </div>
        </div>
        {/* <div className="container"> */}
        <div ref={checkboxRef} className="inner-container ">
          <div className="checkbox-types mb-8">
            <h3>Checkboxes</h3>
            <Checkbox variant="normal" label="checkbox" margin="mt-4" />
            <Checkbox variant="hover" label="hover" margin="mt-4" />
            <Checkbox
              variant="selected"
              label="selected"
              checked={true}
              margin="mt-4"
            />
            <Checkbox
              variant="disabled"
              label="disable"
              disabled={true}
              margin="mt-4"
            />
            <Checkbox
              variant="undetermined"
              label="undetermined"
              indeterminate={true}
              margin="mt-4"
            />
            <Checkbox
              variant="disable-selected"
              label="disable selected"
              disabled={true}
              checked={true}
              margin="mt-4"
            />
            <Checkbox
              variant="disable-undetermined"
              label="disable undetermined"
              disabled={true}
              indeterminate={true}
              margin="mt-4"
            />
          </div>
          <div ref={radioRef} className="radio-types mb-8">
            <h3>Radio buttons</h3>
            <RadioButton
              variant="normal"
              label="Radio"
              name="radio"
              margin="mt-4"
            />
            <RadioButton
              variant="hover"
              label="Hover"
              name="radio"
              margin="mt-4"
            />
            <RadioButton
              variant="selected"
              label="Selected"
              checked={true}
              name="selected"
              margin="mt-4"
            />
            <RadioButton
              variant="disable"
              label="Disable"
              disabled={true}
              name="disabled"
              margin="mt-4"
            />
            <RadioButton
              variant="disable-selected"
              label="Disable Selected"
              disabled={true}
              checked={true}
              name="disabled"
              margin="mt-4"
            />
          </div>
          <div ref={toggleRef} className="toggle-types mb-8">
            <h3>Toggles</h3>
            <Toggle label="Toggle" margin="mt-4" />
            <Toggle label="Hover" hover={true} margin="mt-4" />
            <Toggle
              label="Checked"
              checked={true}
              name="checked"
              margin="mt-4"
            />
            <Toggle
              label="Disable OFF"
              disabled={true}
              checked={false}
              margin="mt-4"
            />
            <Toggle
              label="Disable ON"
              disabled={true}
              checked={true}
              margin="mt-4"
            />
          </div>
        </div>
        {/* </div> */}
        <div className="container mb-8">
          <div ref={listitemRef}>
            <h2 className="mb-4">List Items</h2>
            <div className="list-items">
              <ListItem
                variant="default"
                title="Item"
                value="Value"
                margin="mr-4 mb-4"
              />
              <ListItem
                variant="sub-item"
                title="Sub Item"
                value="Value"
                margin="mr-4 mb-4"
              />
              <ListItem
                variant="tiny-item"
                title="Tiny Item"
                value="Value"
                margin="mr-4 mb-4"
              />
              <ListItem
                variant="subtitle"
                title="Item"
                subtitle="Subtitle"
                value="Value"
                margin="mr-4 mb-4"
              />
              <ListItem
                variant="icon"
                icon={<Icon />}
                title="Item"
                value="Value"
                margin="mr-4 mb-4"
              />
              <ListItem
                variant="icon subtitle"
                icon={<Icon />}
                title="Item"
                subtitle="Subtitle"
                value="Value"
                margin="mr-4 mb-4"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div ref={avatarRef} className="">
            <h2 className="mb-4">Avatars</h2>
            <div className="avatars">
              <Avatar img={user} size="xs" margin="mr-8 mt-4" />
              <Avatar img={user} size="s" margin="mr-8 mt-4" />
              <Avatar img={user} size="m" margin="mr-8 mt-4" />
              <Avatar img={user} size="l" margin="mr-8 mt-4" />
              <Avatar img={user} size="xl" margin="mr-8 mt-4" />
              <Avatar img={user} size="xxl" margin="mr-8 mt-4" />
              <Avatar img={user} size="xxxl" margin="mr-8 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
