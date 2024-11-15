import React from 'react';

const Card = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[230px] h-[210px] lgl:w-[550px] lgl:h-[250px] z-10 rounded-full"
        src="praveen2.jpg"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[230px] h-[220px] lgl:w-[350px] lgl:h-[270px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-lg shadow-lg flex justify-center items-center"></div>

     

       
      {/* Inline styles for animations */}
      {/* <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-opposite {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(-360deg);
            }
          }
        `}
      </style> */}
    </div>
  );
};

export default Card;
