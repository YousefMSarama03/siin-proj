import React from 'react'
import S from '../leading/leadongAssest/S.svg'
import Siin from '../leading/leadongAssest/SiinIcon.svg';
import "./leadingCss.css"


function leading() {
    return (
        <>
            <div className='blur-out-expand h-screen relative flex justify-center items-center bg-white text-black dark:bg-black dark:text-white transition-colors duration-300'>
                <img src={S} alt="S letter" className=' absolute md:w-[440px] md:h-[340px] w-[270px] h-[206px] ' />
                <img src={Siin} alt="Siin icon" className='glow-wave absolute z-50 md:w-[237px] md:h-[67px] w-[142px] h-[40px] ' />
            </div>
        </>
    )
}

export default leading
