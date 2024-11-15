import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn,FaInstagramSquare,FaSearchLocation } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { BsGithub } from "react-icons/bs";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="shakehand.png"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Praveen Sanjeevraopet</h3>
        <p className="text-lg font-normal text-gray-400">
          Java full Stack developer
        </p>
      
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8106197584</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">praveensanjeevraopet9@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 tracking-wide"> 
       Address:<span>5-74/29 Mudhiraj Sangam,
                        Mardi,kalher,sangareddy.</span>
          
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/praveen-sanjeevraopet-6070952a0/" target='_blank'><FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://x.com/praveen_5765?t=B0tOeJ6SbgPTVdT8ypkAuA&s=08" target="_blank"><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.naukri.com/nlogin/login?msg=0&URL=https%3A%2F%2Fmy.naukri.com%3A80" target="_blank"><FaFacebookF /></a>
              
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/praveensanjeevraopet"target="_blank">< BsGithub/></a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft