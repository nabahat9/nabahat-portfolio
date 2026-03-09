import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar/navbar";
import AboutMe from "./components/about_me/about_me";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";
import ContactMe from "./components/contact_me/contactMe";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <div id="home"><AboutMe /></div>
      <div id="services"><Services /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><ContactMe /></div>
    </>
  );
}

export default App;
