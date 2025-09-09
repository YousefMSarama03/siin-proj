import React, { useState } from 'react';
import Tabe from "../../assets/homeAssests/Tabe.svg";
import Tag from "../../assets/homeAssests/Tag.svg";
import N from "../../assets/homeAssests/N.svg";
import Contact from "../../assets/homeAssests/contact.svg";
import video from "../../assets/homeAssests/video.svg";
import Brands from "../../assets/homeAssests/Brands.svg";
import Button from "../../assets/homeAssests/Button.svg";
import Line from "../../assets/homeAssests/Line.svg";
import Info from "./Card/Info";
import icon from "../../assets/homeAssests/icon.svg";
import ground from "../../assets/homeAssests/ground.PNG";
import insta from "./Card/insta.svg";
import twitter from "./Card/twitter.svg";
import linkedin from "./Card/linkedin.svg";
import Footer from "../Footer/Footer";






const employees = [
  { id: 1, name: 'yousef sarama', age: 30, job: 'Software Engineer' },
  { id: 2, name: 'ahmad humira', age: 30, job: 'Maneger' },
  { id: 3, name: 'fatima zahrea', age: 30, job: 'Designer UI' },
  { id: 4, name: 'aya nam', age: 30, job: 'merketing' },
  { id: 1, name: 'yousef sarama', age: 30, job: 'Software Engineer' },
  { id: 2, name: 'ahmad humira', age: 30, job: 'Maneger' },
  { id: 3, name: 'fatima zahrea', age: 30, job: 'Designer UI' },
  { id: 4, name: 'aya nam', age: 30, job: 'merketing' },
  { id: 1, name: 'yousef sarama', age: 30, job: 'Software Engineer' },
  { id: 2, name: 'ahmad humira', age: 30, job: 'Maneger' },
  { id: 3, name: 'fatima zahrea', age: 30, job: 'Designer UI' },
  { id: 4, name: 'aya nam', age: 30, job: 'merketing' },

]


const About = () => {


  const [Ishidden, setHidden] = useState("hidden");


  return (
    <>

  <section className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <div className='max-lg:px-4'>
          {/*left section*/}
          <div className="flex flex-col lg:flex-row w-full ">
            <div className=" relative hidden  w-full lg:w-[35%] h-auto md:h-[780px] lg:flex items-center justify-start pt-10 md:pt-28">
              <img src={Tag} alt="Tag" className='w-[3rem] relative z-50 left-[55px] bottom-14 h-auto md:w-[3rem] md:h-[35rem]' />
              <h1 className="text-2xl md:text-4xl relative left-[11rem] bottom-[19rem] mt-4 font-bold text-gray-900 dark:text-white"><span className='underline decoration-gray-500/60 dark:decoration-gray-500/60 light:decoration-gray-300/60 decoration-2 underline-offset-[1rem]'>AB</span>OUT US</h1>
              <img src={N} alt="N image" className=' absolute w-[30rem]   mt-24 top-24 right-4 md:top-28 md:right-auto' />
            </div>

            {/*right section*/}
            <div className="w-full lg:w-[65%] flex flex-col justify-center lg:text-left text-start lg:p-24 border-0 ">
              <div className='text-start uppercase text-3xl lg:hidden py-9 font-bold text-gray-900 dark:text-white'><span className='underline decoration-slate-50 decoration-1 underline-offset-[1rem]'>ABO</span>ut us</div>

              <div className="mb-6 text-3xl tracking-widest leading-[60px] uppercase font-bold text-gray-900 dark:text-white">
                We are a digital production team.
              </div>
              <div className=''>
                <p className="text-2xl leading-[50px] uppercase text-justify text-gray-700 dark:text-gray-300">
                  SIIN is a leading design & software development agency based in
                  Cyprus. We help startups & Fortune 500 companies delight humans
                  on the other side of the screen.
                </p>
                <a href="#More" ><img src={Contact} onClick={() => { setHidden("block") }} alt="contact icon" className='lg:w-[8rem] w-[6rem] mt-2  inline cursor-pointer hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200 border-0' /></a>
              </div>
            </div>
          </div>

          <div className={`${Ishidden} relative w-full mt-12 md:mt-16`} id="More">
            <div className=" relative flex flex-col lg:flex-row justify-around items-baseline">
              <img src={Brands} alt="Brands" className="w-[90%] md:w-[35rem] pt-7" />

              <img
                src={Button}
                alt="button icon"
                className="relative top-6 w-[8rem] max-lg:left-[250px] lg:w-[14rem] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200 border-0"
              />
            </div>
            <img
              src={Line}
              alt="Line"
              className=" absolute -z-50 top-36 left-[195px] w-[90%] hidden lg:flex lg:w-[1200px]  "
            />
            <div className="lg:px-[190px]">
              <p className="text-sm md:text-[18px] md:text-start pt-10 leading-[40px] uppercase text-justify text-gray-700 dark:text-gray-300">
                Welcome to SIIN, your trusted partner in the dynamic world of
                digital solutions. We are a passionate team of creative minds, tech
                enthusiasts, and digital strategists, dedicated to empowering
                businesses and individuals in the digital realm. Our mission is to
                deliver exceptional results that drive success, create meaningful
                connections, and bring your digital vision to life. With a
                customer-centric approach and a focus on innovation, we are
                committed to being at the forefront of the ever-evolving digital
                landscape.
              </p>
            </div>


            <div className='w-ful h-auto md:mt-[150px] mt-[65px] '>
              <div className='text-center items-center'>
                <h1 className='lg:text-[48px] text-[25px] uppercase font-bold text-gray-900 dark:text-white'><span className='blueSiin '>Our</span> Team Members</h1>
                <p className='text-sm md:text-[18px] text-balance uppercase leading-[40px] lg:px-72 pt-4 text-gray-700 dark:text-gray-300'>Partnering with SIIN offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
              </div>

              <div className='w-full h-auto grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4 lg:gap-8 gap-4 lg:p-[125px] '>
                <Info employees={employees} />
              </div>

              <div className='flex flex-col xl:px-[10rem] max-md:mt-[64px]  '>
                <div className='flex flex-col  items-center'>
                  <h1 className='lg:text-[3rem] text-[2rem] capitalize font-bold pb-4 flex text-gray-900 dark:text-white'><span className='blueSiin'>Our </span>&nbsp; Achievements</h1>
                  <p className='text-[18px] font-light text-center leading-[35px] uppercase px-2 text-gray-700 dark:text-gray-300'>Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.</p>
                </div>
                {/* full achievements */}
                <div className='mt-8'>
                  <div className='w-full flex  justify-between  my-14  '>
                    <div className=' w-[20%] flex justify-center lg:text-[6rem] text-[2rem]'>
                      <h1 className=' font-extrabold '>
                        <span className=' relative'>0
                          <div className="absolute -top-2 right-1/2 lg:w-[4rem] w-[2rem] rounded-lg lg:h-44 h-20 bg-gradient-to-r from-[#0A0A0A] to-[#181A1A] backdrop-blur-md" ></div>
                        </span>1</h1>
                    </div>

                    <div className='w-[80%] '>
                      <div className='flex justify-between '>
                        <h2 className=' text-[28px] font-semibold capitalize'>siin</h2>
                        <h4 className='pr-4'>October 2017</h4>
                      </div>

                      <div className='bg-[#fff1] rounded-lg mt-10'>
                        <div className='px-10 py-5 md:text-xl text-xs'>
                          <h1 className='py-2 capitalize text-gray-900 dark:text-white'>Description</h1>
                          <p className='capitalize text-gray-600 dark:text-gray-400'>Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                
                <Footer />
              </div>
            </div>
          </div>
        </div>

      </section>

    </>

  );
};

export default About;
