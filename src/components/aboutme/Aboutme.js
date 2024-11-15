import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
const Aboutme = () => {
  return (<>
 <section
      id="aboutme"
      className="w-full py-10 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="ABOUT ME" des="About Me" />
      </div>
      <div class="w-full h-auto flex flex-col lgl:flex-row justify-between">
      <div>
      <Card></Card>
      </div>
      <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      
      <div className="flex flex-col gap-4">
      <h5 className="text-1xl text-white">Hi,I'm Praveen<h3 className="text-2xl font-bold text-white"> a Java Full Stack Developer</h3></h5>
  
        <p className="text-base text-gray-400 tracking-wide">

    
      
I am an aspiring software developer with a strong foundation in programming and a passion for building innovative applications. I have completed my  Master of Computer Applications, I have developed a solid understanding of technologies like Java, Spring Boot, Python, and ReactJS. My academic journey has equipped me with analytical and problem-solving skills, which I apply to real-world projects. One of my key projects involved creating a Neural Networks-based attendance management system that utilizes face recognition technology, streamlining attendance processes in educational settings. I also developed a web-based banking application, enhancing user experience with essential banking functionalities. Proficient in various tools and frameworks, I enjoy learning new technologies and adapting to changing environments. I thrive in collaborative settings, often helping peers with technical challenges. Outside of coding, I enjoy listening to music, playing chess, and participating in debates, which further sharpen my critical thinking. My goal is to contribute meaningfully to a dynamic software organization while continuously growing my expertise in the field. I am excited about the possibilities ahead and eager to take on new challenges in software development.
</p>
        
        
        </div>
      </div>
   
   </div>
    </section>
  </>);
};

export default Aboutme;
