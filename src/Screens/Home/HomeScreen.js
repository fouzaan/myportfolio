import React from "react";
import { AiOutlineInstagram, AiFillLinkedin } from "react-icons/ai";
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
      <div className="HomeMain">
        <img
          className="img1"
          src={require("./BloggingPic.png")}
          alt="me coding illustration"
        ></img>

        <div className="Title">
          <h1 className="SubTitleText">Blogs</h1>
          <h3 className="TitleText">Check out for amazing blogs, and more.</h3>
          <a href="/blogs" className="linkText">
            See Blogs 😀
          </a>
        </div>
      </div>
      <div className="HomeMainReverse">
        <div className="Title">
          <h1 className="SubTitleText">Instagram Posts</h1>
          <h3 className="TitleText">
            Flollow and get the latest tips, tricks, and solution
          </h3>
          <a href="/insta_posts" className="linkText">
            See Posts 😀
          </a>
        </div>
        <img
          className="img1"
          src={require("./InstaPosts.png")}
          alt="me coding illustration"
        ></img>
      </div>
      <div className="HomeMain">
        <img
          className="img1"
          src={require("./ContactMe.png")}
          alt="Contact"
        ></img>
        <div className="ContactDiv">
          <h1 className="SubTitleText">Email</h1>
          <h3 className="TitleText">fouzaanahmed1@gmail.com</h3>
          <h1 className="SubTitleText">Social Media</h1>
          <div className="ContactIcon">
            <a href="http://www.facebook.com">
              <AiOutlineInstagram color="#d6d5a8" size="2rem" />
            </a>

            <a href="http://www.facebook.com">
              <AiFillLinkedin color="#d6d5a8" size="2rem" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
