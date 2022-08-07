import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <div className="Skills">
      <div className="Skills_Info">
        <div>
          <h2 className="SubTitleText">Worked on</h2>
        </div>
        <div className="Circle">
          <h2 className="ProjectsWorkedOn">
            25+ <br /> Projects
          </h2>
        </div>
      </div>
      <img
        className="ProjectsWorkedOnPic"
        src={require("./WorkingOnProjects.png")}
        alt="Worked on 20+ projects"
      ></img>
    </div>
  );
}

export default Skills;
