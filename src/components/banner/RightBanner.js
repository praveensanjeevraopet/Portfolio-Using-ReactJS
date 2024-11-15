import React from 'react';

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[330px] lgl:w-[500px] lgl:h-[470px] z-10 rounded-full"
        src="praveen2.jpg"
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[330px] h-[340px] lgl:w-[480px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] rounded-full shadow-lg flex justify-center items-center"></div>

      {/* చుట్టూ తిరిగే రెడ్ లైన్ */}
      <div className="absolute w-[350px] h-[350px] lgl:w-[510px] lgl:h-[510px] flex justify-center items-center">
        {/* Top Segment */}
        <div
          className="absolute border-4 border-red-500 rounded-full"
          style={{
            width: '100%',
            height: '100%',
            animation: 'rotate 4s linear infinite',
            clipPath: 'polygon(50% 0%, 100% 0%, 100% 50%, 50% 50%)', // Top segment
          }}
        />
        
        
        {/* Bottom Segment */}
        <div
          className="absolute border-4 border-red-500 rounded-full"
          style={{
            width: '100%',
            height: '100%',
            animation: 'rotate 4s linear infinite',
            clipPath: 'polygon(0% 50%, 0% 100%, 50% 100%, 50% 50%)', // Bottom segment
          }}
        />
        
      </div>

      {/* Inline styles for animations */}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default RightBanner;
