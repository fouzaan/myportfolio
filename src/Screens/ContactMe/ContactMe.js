import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import "./ContactMe.css";
function ContactMe() {
  return (
    <div className="ContactPage">
      <h1>Contact Me</h1>
      <div className="ContactMe_info">
        <div className="ContactMainTitle">
          <h1 className="ContactByMethod">Email</h1>
          <h3 className="ContactInfo">fouzaanahmed1@gmail.com</h3>
          <h1 className="ContactByMethod">Social Media</h1>
          <AiOutlineInstagram size="2rem" />
        </div>
        <img
          className="ContactPic"
          src={require("./ContactMe.png")}
          alt="Contact"
        ></img>
      </div>
    </div>
  );
}

export default ContactMe;
