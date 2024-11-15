import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";

import Aboutme from "./components/aboutme/Aboutme";

import Skills1 from "./components/mskill/Skills1";
import Education from "./components/education/Education";
import Chinna from "./components/Chinna";



function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Aboutme></Aboutme>
        <Education>
        </Education>
        <Skills1></Skills1>
        <Projects />
        <Resume />
        <Contact />
        <Footer />
        <FooterBottom />
        <Chinna></Chinna>
      </div>
    </div>
  );
}

export default App;
