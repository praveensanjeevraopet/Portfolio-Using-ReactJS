import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [ "Full Stack Developer.", "UI Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor red capitalize text-5xl"  >Praveen     Sanjeevraopet</span> 
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Full Stack Java Developer with six months of hands-on experience in designing, 
          developing, and maintaining web applications. My expertise spans both front-end and back-end technologies, 
          allowing me to create seamless and dynamic user experiences. I am proficient in Java, Spring Boot,
          and various front-end frameworks...
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner