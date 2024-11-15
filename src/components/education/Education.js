import React from 'react';
import Title from '../layouts/Title';
import { motion } from 'framer-motion';
import ResumeCard from '../resume/ResumeCard';

const Education = () => {
  return (
    <section
      id="education"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="MY EDUCATION QUALIFICATION" des="Education" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
      >
        {/* Part One */}
        <div className="flex-1">
          <div className="py-6 lg:py-6 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
            <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-6 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Master Of Computer Applications (MCA)"
              subTitle="University College Of Engineering & Technology, MG University, Nalgonda. (2022 - 2024)"
              result="9.00/10"
              des="The Master of Computer Applications (MCA) is a two-year postgraduate program focused on equipping students with essential skills in programming, software development, and IT management. It combines theoretical knowledge with practical experience through projects and internships, preparing graduates for diverse roles in the tech industry."
            />
            <ResumeCard
              title="BSc in Computer Science"
              subTitle="Girraj Govt College at Nizamabad, TG University (2019 - 2022)"
              result="8.40/10"
              des="A Bachelor of Science in Computer Science (BSc Computers) is an undergraduate degree that offers a strong foundation in programming, algorithms, and software development. It equips students with both theoretical knowledge and practical skills, preparing them for diverse careers in technology and IT."
            />
            <ResumeCard
              title="Intermediate - MPC"
              subTitle="Vidya Vikas Jr College at Bodhan, TG University (2017 - 2019)"
              result="8.20/10"
              des="MPC (Mathematics, Physics, Chemistry) Intermediate is a two-year educational program designed for students pursuing a focus on science and engineering. It prepares students for higher education in fields like engineering, medicine, and other technical disciplines through a strong foundation in these core subjects."
            />
            <ResumeCard
              title="Secondary School Certificate (SSC)"
              subTitle="TSWREI School/Jr College at Alwal, Siddipet, TG University (2011 - 2017)"
              result="8.50/10"
              des="The Secondary School Certificate (SSC) is a crucial educational milestone that marks the completion of secondary education. This certification provides foundational knowledge across various subjects and is often a prerequisite for further studies in higher secondary or vocational courses."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
