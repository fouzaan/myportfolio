import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/Home/HomeScreen";
import Librarys from "./Screens/LibrarysWorkedon/Librarys";
import Skills from "./Screens/Skills/Skills";
import Navbars from "./Screens/Navigation/navbar";
// styles

function App() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/lib" element={<Librarys />} />
      </Routes>
    </div>
  );
}

export default App;
