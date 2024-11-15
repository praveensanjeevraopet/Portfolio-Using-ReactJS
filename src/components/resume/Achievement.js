import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">ACHIVEMENTS</p>
          <h2 className="text-4xl font-bold">Achivements</h2>
        </div>
        <div className="mt-1 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Successful Project Completion."
            subTitle=""
            result="Success"
            des=" Completed a real-world software development project during my internship at Sathya Tech, contributing to the development of innovative solutions that enhanced team efficiency."
          />
          <ResumeCard
            title="Enhanced Programming Skills."
            subTitle=""
            result="Success"
            des="Improved my programming proficiency in languages such as Java, Python, and JavaScript through hands-on projects, resulting in a deeper understanding of software development"
          />
          <ResumeCard
            title="Web Design Proficiency."
            subTitle=""
            result="Success"
            des="Developed user-friendly and visually appealing websites during my college internship, mastering HTML, CSS, and JavaScript, which strengthened my front-end development skills"
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold"></h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Adaptability to Technologies."
            subTitle=""
            result="Success"
            des=" Successfully learned and applied various emerging technologies during my internships, demonstrating my ability to adapt to new tools and frameworks quickly.

"
          />
          <ResumeCard
            title="Collaboration and Teamwork."
            subTitle=""
            result="Success"
            des="Collaborated effectively with professional teams at Sathya Tech, enhancing my teamwork and communication skills in a fast-paced development environment."
          />
          <ResumeCard
            title="Practical Application of Theoretical Knowledge."
            subTitle=""
            result="Success"
            des="Bridged the gap between theoretical concepts and practical application through projects and internships, preparing me for future challenges in the tech industry"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
