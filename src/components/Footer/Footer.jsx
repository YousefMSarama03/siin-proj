import React from 'react';
import icon from "../../assets/homeAssests/icon.svg";
import ground from "../../assets/homeAssests/ground.png";
import linkedin from "../About/Card/linkedin.svg";
import insta from "../About/Card/insta.svg";
import twitter from "../About/Card/twitter.svg";

const Footer = () => {
  return (
  <footer className='w-full bg-gray-50 text-black dark:bg-black dark:text-white transition-colors duration-300 border-0'>
      <div className='bg-white/80 dark:bg-[#2222] rounded-2xl shadow-sm mx-2 mt-4'>
        <div className='py-[120px] h-auto'>
          <div className='lg:px-[160px]'>
            <div className='flex flex-col justify-center items-center gap-5 text-center'>
              <h1 className='lg:text-[48px] text-[22px] capitalize font-bold'>Ready to Transform Your Digital Presence?</h1>
              <p className='text-center lg:text-[18px] text-[11px] text-[#8C8C8C] capitalize'>
                Take the first step towards digital success with SIIN by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center py-6 gap-[20px]'>
              <h1 className='lg:text-[20px] text-[12px]'>Unlock Your Digital Potential Today</h1>
              <div className='flex gap-[10px]'>
                <button className="bg-blueSiin text-white lg:px-8 lg:py-4 px-3 py-1.5 text-xs rounded-full transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-lg capitalize shadow-md border-0">
                  Get started
                </button>
                <button className="bg-white text-black text-xs lg:px-8 lg:py-4 px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-lg capitalize shadow-md dark:bg-[#262626] dark:text-white border-0">
                  Free consultation
                </button>
              </div>
            </div>
          </div>
          <div className='mt-16'>
            <div className='flex flex-col items-center justify-center w-full'>
              <img src={icon} alt="icon" className='hidden xl:flex lg:w-[44rem] w-[13rem]' />
              <img src={ground} alt="ground" className='hidden xl:flex w-full relative lg:top-[-68px] top-[-30px]' />
            </div>
            <div className='flex flex-row justify-between items-center mb-12'>
              <img src={icon} alt="icon" className='lg:w-[9rem] w-[6rem]' />
              <div className='flex flex-row justify-center items-center gap-5'>
                <h1 className='capitalize lg:text-[18px] text-[9px]'>Follow Us On Social Media</h1>
                <div className='flex flex-row lg:gap-[14px]'>
                  <img src={linkedin} alt="linkedin" className='lg:w-[40px] w-[20px] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200 border-0' />
                  <img src={insta} alt="insta" className='lg:w-[40px] w-[20px] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-pink-200 dark:hover:ring-pink-900 transition-all duration-200 border-0' />
                  <img src={twitter} alt="twitter" className='lg:w-[40px] w-[20px] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-400 dark:hover:ring-blue-900 transition-all duration-200 border-0' />
                </div>
              </div>
            </div>
            <hr className='border-t-[1px] border-gray-200 dark:border-[#262626]' />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
