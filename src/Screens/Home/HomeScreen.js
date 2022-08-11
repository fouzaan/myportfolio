import React from "react";
import ContactMe from "../ContactMe/ContactMe";
import Librarys from "../LibrarysWorkedon/Librarys";
import Skills from "../Skills/Skills";
import "./HomeStyle.css";
function HomeScreen() {
  return (
    <>
      <div className="HomeMain">
        <img
          className="img1"
          src={require("./ProgrammingPic.png")}
          alt="me coding illustration"
        ></img>

        <div className="Title">
          <h1 className="TitleText">Hi I am Fouzaan</h1>
          <h3 className="SubTitleText">
            Full stack IOS and WEB <br /> developer
          </h3>
        </div>
      </div>
      <Skills />
      <Librarys />
      <ContactMe />
    </>
  );
}

export default HomeScreen;
