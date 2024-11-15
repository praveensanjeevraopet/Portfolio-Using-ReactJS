import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master Of Computer Applications(MCA)"
            subTitle="University College Of Engineering & Technology,
            MG University,Nalgonda. (2022 - 2024)"
            result="9.00/10"
            des="The Master of Computer Applications (MCA) is a three-year postgraduate program focused on equipping students with essential skills in programming, software development, and IT management."
          />
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Girraj Govt College at Nizamabad,TG University (2019 - 2022)"
            result="8.40/10"
            des="
A Bachelor of Science in Computer Science (BSc Computers) is an undergraduate degree that offers a strong foundation in programming, algorithms, and software development."
            />
          <ResumeCard
            title="Intermediate - MPC"
            subTitle="vidya Vikas Jr College at Bodhan,TG University(2017 - 2019)"
            result="8.20/10"
            des="It prepares students for higher education in fields like engineering, medicine, and other technical disciplines through a strong foundation in these core subjects."
          />
        
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 DEC - 2024 APR</p>
          <h2 className="text-3xl md:text-4xl font-bold"> Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" Software Intern"
            subTitle="Sathya Tech - (2024 MAY - Present)"
            result="HYD"
            des="During my internship at Sathya Tech, I gained practical experience in software development by working on real-world projects and collaborating with a professional team"
          />
          <ResumeCard
            title="Web Developer & Intern"
            subTitle="MG University Team - (2023 - 2024)"
            result="NALGONDA"
            des="During my internship at college, I focused on web design, where I learned to create user-friendly and visually appealing websites. I gained hands-on experience with HTML, CSS, and JavaScript, enhancing my skills in responsive design and front-end development."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Sathya Tech - (2024 MAY)"
            result="HYD"
            des="
During my internship at Sathya Tech, I gained practical experience in software development by working on real-world projects and collaborating with a professional team"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education