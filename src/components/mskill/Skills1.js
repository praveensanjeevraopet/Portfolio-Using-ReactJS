import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import { FaHandPointDown } from "react-icons/fa";
/*import Achievement from './Achievement';*/
/*import Experience from "./Experience"*/

const Skills1 = () => {
   const [educationData, setEducationData] = useState(true);
   const [skillData, setSkillData] = useState(false);
   /*const [experienceData, setExperienceData] = useState(false);*/
   /*const [achievementData, setAchievementData] = useState(false);*/
  return (
    <section id="skills1" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="MY SKILLS" des="Technical Skills" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
           TECH SKILLS ARE CLICK BELLOW _<FaHandPointDown />
          </li>
          <br></br>
          <br></br>
          <li
            onClick={() =>
              
             
              setEducationData(false)& 
              setSkillData(true)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Click Here
          </li>
          {/*<li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true) &
              setAchievementData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            projects
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Achievements
          </li>*/}
        </ul>
      </div>
      {educationData && <Education />}
     
      {/*{achievementData && <Achievement />}
      {experienceData && <Experience />}*/}
      {skillData && <Skills />}
 
    </section>
  );
}

export default Skills1