import React from 'react'
import Title from '../layouts/Title'
import { projectOne1, projectTwo1, projectThree1 } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="MY PROJECTS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Neural Networks-Attendance Management System Using Face Recognition"
          des="Face recognition technology is widely used for biometric identification due to its non-intrusive, touchless nature. It enhances attendance management in educational institutions by streamlining the process and reducing proxy attendance. Utilizing Convolutional Neural Networks (CNN), the system captures images to build a database. It detects and recognizes faces in real-time from live-streaming video in classrooms. This solution improves efficiency and accuracy in attendance tracking.I have used Technologies & Tools are  Python, Conventional Neural Networks, Support Vector Missions, MySql, Git, Tkinter python library for UI, Visual Studio Code, Eclipse .         "
          src={projectOne1}
        />
        <ProjectsCard
          title="Driver Drowsiness Detection and Alert System"
          des="Driver fatigue is a major cause of accidents globally, with drowsiness detection being a reliable measure. This project aims to develop a non-intrusive drowsiness detection system that monitors the driver’s eyes in real-time. It detects blinks and yawns, sounding an alarm if the driver’s eyes remain closed for too long. Using simple Python code and Dlib for detection, the system enhances driver safety without being intrusive. Additionally, a hardware solution utilizing infrared light is proposed to further address drowsiness-related issues."
          src={projectTwo1}
        />
       
        <ProjectsCard
          title="UFB Application"
          des="The CFB Application is a web-based platform designed to facilitate basic banking operations for users. Developed functionalities like open new account, withdraw, deposit, check balance, transfer, and Account closer. The application allows users to perform essential banking tasks securely and efficiently.i have used Technologies & Tools are  Java, Servlets, Html,CSS,JDBC, Spring Boot, ReactJs. "
      
          src={projectThree1}
        />
       
     
      </div>
    </section>
  );
}

export default Projects