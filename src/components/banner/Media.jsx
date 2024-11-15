import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaJava, FaHtml5, FaPython, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-scroll';
import { mediadata } from '../../constants';
import { BsGithub } from "react-icons/bs";

const Media = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-4 lgl:gap-0 justify-inline">
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-10 lg:gap-10">
            {mediadata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300 "
                key={_id}
              >
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <span className="bg-red-500 text-white p-1 rounded shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-600" >
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
              <a href="https://github.com/praveensanjeevraopet"target="_blank"><BsGithub /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaPython />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Media;
