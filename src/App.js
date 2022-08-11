import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import Navbars from "./Screens/Navigation/navbar";
import Blog from "./Screens/Blog/Blog";
import InstaPosts from "./Screens/InstaPosts/InstaPosts";
// styles

function App() {
  //const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/insta_posts" element={<InstaPosts />} />
      </Routes>
    </div>
  );
}

export default App;
