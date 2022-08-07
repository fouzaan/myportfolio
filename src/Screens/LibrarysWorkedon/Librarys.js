import React from "react";
import "./Librarys.css";
import { FaSwift, FaReact, FaCss3Alt, FaAws } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiFirebase, SiExpress } from "react-icons/si";
import { RiSailboatFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
function Librarys() {
  return (
    <div className="lib">
      <h1>Worked with</h1>
      <div className="LibGrid">
        <LibrarysCard iconName={"Swift"}>
          <FaSwift color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"HTML"}>
          <AiFillHtml5 color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"CSS"}>
          <FaCss3Alt color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"JavaScript"}>
          <SiJavascript color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"React"}>
          <FaReact color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"React Native"}>
          <FaReact color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"FireBase"}>
          <SiFirebase color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"AWS"}>
          <FaAws color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"Express"}>
          <SiExpress color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"Sails"}>
          <RiSailboatFill color="#d6d5a8" size="100%" />
        </LibrarysCard>
        <LibrarysCard iconName={"MongoDB"}>
          <DiMongodb color="#d6d5a8" size="100%" />
        </LibrarysCard>
      </div>
    </div>
  );
}

function LibrarysCard(props) {
  return (
    <div className="libCard">
      {props.children} <h3>{props.iconName}</h3>
    </div>
  );
}

export default Librarys;
