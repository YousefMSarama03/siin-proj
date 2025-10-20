import React from 'react';
import icon from "../../assets/NavAssests/siin.svg";
import ground from "../../assets/homeAssests/ground.png";
import linkedin from "../About/Card/linkedin.svg";
import insta from "../About/Card/insta.svg";
import twitter from "../About/Card/twitter.svg";
import Ellipse from "../../assets/NavAssests/Ellipse.svg";
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToForm = () => {
    if (location.pathname !== '/contact') {
      navigate('/contact#More');
    } else {
      const el = document.getElementById('More');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          const nameInput = document.getElementById('name');
          if (nameInput) nameInput.focus();
        }, 300);
      }
    }
  };

  return (
    <footer className='w-full bg-gray-50 text-black dark:bg-black dark:text-white transition-colors duration-300 border-0'>
      <div className='bg-white/80 dark:bg-[#2222] rounded-2xl shadow-sm mx-2 mt-4'>
        <div className='py-[120px] h-auto'>
          <div className='lg:px-[160px]'>
            <div className='flex flex-col justify-center items-center gap-5 text-center'>
              <h1 className='lg:text-[48px] text-[22px] capitalize font-bold text-gray-900 dark:text-white'>Ready to Transform Your Digital Presence?</h1>
              <p className='md:text-center lg:text-[18px] text-[11px] text-gray-600 dark:text-gray-300 capitalize'>
                Take the first step towards digital success with SIIN by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center py-6 gap-[20px]'>
              <h1 className='lg:text-[20px] text-[12px] text-gray-900 dark:text-white'>Unlock Your Digital Potential Today</h1>
              <div className='flex gap-[10px]'>
                <button onClick={goToForm} aria-label="Get started with SIIN services" className="inline-flex items-center justify-center bg-blueSiin text-white lg:px-8 lg:py-4 px-3 py-1.5 text-xs rounded-full transition-all duration-200 hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-lg capitalize shadow-md border-0">
                  Get started
                </button>
                {/* <button className="bg-white text-black text-xs lg:px-8 lg:py-4 px-3 py-1.5 rounded-full transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:shadow-lg capitalize shadow-md dark:bg-[#262626] dark:text-white border-0" aria-label="Schedule a free consultation">
                  Free consultation
                </button> */}
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
                <div className=" md:flex">
                  <ul className="flex space-x-3 text-sm" role="list" aria-label="Social media links">
                    <li><a href="https://www.facebook.com/share/1JsYUEWWVw/" aria-label="Facebook" className="hover:text-blueSiin transition-colors">FB</a></li>
                    <img src={Ellipse} alt="" role="presentation" />
                    <li><a href="https://www.instagram.com/siin.dev?igsh=MnJ4Nm51Ym4zY3hv" aria-label="instagram" className="hover:text-blueSiin transition-colors">IN</a></li>
                    {/*<img src={Ellipse} alt="" role="presentation" />
                    <li><a href="#" aria-label="Dribbble" className="hover:text-blueSiin transition-colors">DR</a></li>
                    <img src={Ellipse} alt="" role="presentation" />
                    <li><a href="#" aria-label="Behance" className="hover:text-blueSiin transition-colors">BE</a></li>*/}
                  </ul>
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
