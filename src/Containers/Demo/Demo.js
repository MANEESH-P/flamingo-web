import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import Avatar from "../../Components/Avatar/Avatar";
import bg from "../../Assets/illustration.jpg";
import img from "../../Assets/id_card_maneesh.jpeg";
import Input from "../../Components/Input/Input";
import { ReactComponent as Icon } from "../../Assets/placeholder.svg";
import ListItem from "../../Components/ListItem/ListItem";
import TextArea from "../../Components/TextArea/TextArea";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Select from "../../Components/Select/Select";
import RadioButton from "../../Components/RadioButton/RadioButton";
import Toggle from "../../Components/Toggle/Toggle";
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
export default function Demo() {
  return (
    <div className="demo-container">
      <header className="header pl-16 pr-16">
        <div className="header__left">
          <h1 className="brand">Flamingo Web</h1>
          <h1 className="mb-6">
            We made this Page. <br /> Any big heading goes here!
          </h1>
          <p className="mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="mb-4">
            Lorem Ipsum is simply dummy text of the printing.
          </p>
          <div className="wrapper mb-6">
            <Input
              type="text"
              variant="search"
              placeholder="Text here"
              margin="mt-4"
            />
            <Button
              variant="primary"
              type="default"
              label="Let's go!"
              margin="ml-4 mt-4"
            ></Button>
          </div>
        </div>
        <div className="header__right">
          <img src={bg}></img>
        </div>
        <div className="theme-toggle">
          <Toggle variant="normal" label=""></Toggle>
        </div>
      </header>
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
          <Link to="/">
            <p>Foundations</p>
          </Link>
          <Link to="/elements">
            <p>Elements</p>
          </Link>
        </div>
      </div>
      <section className="avatar-section pl-36 pr-36 pt-12 pb-24">
        <h1 className="mb-24 mt-24">That's some cool looking avatars!</h1>
        <div className=" section__container">
          <div className="avatar-card">
            <Avatar img={img} size="xxxl" margin="" />
            <div className=" p-10">
              <h3 className="mb-4">Fancy Heading</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Button
                variant="primary"
                type="minimal"
                label="know more"
                margin="ml-4 mt-4"
                shadow="shadow--b-1"
              ></Button>
            </div>
          </div>
          <div className="avatar-card">
            <Avatar img={img} size="xxxl" margin="" />
            <div className="p-10">
              <h3 className="mb-4">Fancy Heading</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Button
                variant="primary"
                type="minimal"
                label="know more"
                margin="ml-4 mt-4"
                shadow="shadow--b-1"
              ></Button>
            </div>
          </div>
          <div className="avatar-card">
            <Avatar img={img} size="xxxl" margin="" />
            <div className="p-10">
              <h3 className="mb-4">Fancy Heading</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <Button
                variant="primary"
                type="minimal"
                label="know more"
                margin="ml-4 mt-4"
                shadow="shadow--b-1"
              ></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="listitem-section pl-36 pr-36 mt-24 mb-24">
        <h1 className="mb-24">What did you like?</h1>
        <div className="section__container">
          <div className="section__left">
            <div className="p-10">
              <h3 className="mb-4">Fancy Heading</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div>
            <div className="listitem-section__right p-10">
              <div className="flex-container">
                <ListItem
                  variant="default"
                  title="Item"
                  value="Value"
                  margin=""
                />
                {/* <Checkbox variant="normal" label="looks good" margin="mt-2" /> */}
              </div>
              <div className="flex-container">
                <ListItem
                  variant="sub-item"
                  title="subitem"
                  value="Value"
                  margin="mt-4"
                />
                {/* <RadioButton
                  variant="normal"
                  label="Cool Radio button"
                  name="radio"
                  margin=""
                /> */}
              </div>
              <div className="flex-container">
                <ListItem
                  variant="tiny-item"
                  title="Item"
                  value="Value"
                  margin="mt-4"
                />
                {/* <Toggle label="Toggle" margin="" /> */}
              </div>
            </div>
          </div>
        </div>
        <Button variant="primary" type="outline" label="Loved it"></Button>
        {/* <div className="section-checkbox">
          <div>
            <Checkbox variant="normal" label="loved it" margin="mt-4" />
          </div>
        </div> */}
      </section>
      <div className="contact pl-36 pr-36 mt-24 pb-10">
        <div className="contact__left p-10 mt-24">
          <h1>Feel free to write to us!</h1>
          <p className="mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="contact__right mt-24 p-10">
          <Input
            type="text"
            variant="normal"
            placeholder="Name"
            margin="mb-6"
          />
          <Select
            variant="normal"
            options={["Gender", "male", "female", "NA"]}
            margin="mr-6 mb-6"
          />
          <Input
            type="email"
            variant="normal"
            placeholder="Email"
            margin="mb-6"
          />

          <TextArea variant="normal" placeholder="Suggestions" margin="mb-6" />

          <Checkbox variant="normal" label="loved it" margin="mb-6" />

          <Button variant="primary" type="default" label="submit"></Button>
        </div>
      </div>
      <footer className="p-12">
        <Button variant="icon" label={<Icon />} margin="mr-6"></Button>
        <Button variant="icon" label={<Icon />} margin="mr-6"></Button>
        <Button variant="icon" label={<Icon />}></Button>
      </footer>
    </div>
  );
}
