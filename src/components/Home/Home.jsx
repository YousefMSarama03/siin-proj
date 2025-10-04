import React from 'react'
import "./HomeCss.css";
import S from "./homeAsset/S.svg"
import Tag from "../../assets/homeAssests/Tag.svg"
import Ellipse from "../../assets/NavAssests/Ellipse.svg";
import Video from "./homeAsset/Video.svg";
import Footer from "../Footer/Footer";


function Home() {
    return (
        <>
            <section className="bg-white text-gray-800 dark:bg-black dark:text-white transition-colors duration-300">
                <div className='max-lg:px-4'>
                    <main className='relative flex flex-col justify-between pt-28 w-full min-h-screen overflow-hidden' role="main">
                        <div className='absolute left-4 md:left-16 pt-5 flex w-full max-md:justify-end md:items-baseline md:space-x-8'>
                            <img src={Tag} alt="tag" className='w-[13px] max-md:hidden' />
                            <img src={S} alt="S" className='lg:w-[430px] md:w-[330px] max-md:w-[214px]' />
                        </div>

                        <div className='md:absolute z-50 lg:left-[210px] md:left-[155px] top-[220px] max-md:px-4 max-md:pt-8 max-md:pb-8'>
                            <h1 className='text-white dark:text-white text-[70px] font-bold max-lg:text-5xl max-md:text-3xl md:leading-relaxed max-md:leading-[2] capitalize'>
                                Cloud.Data. Analysis.
                                <br />
                                in-house development.
                                <br />
                                & more
                            </h1>
                        </div>

                        <div className="flex flex-col justify-center items-center md:hidden h-[200px] py-8">
                            <ul className="flex space-x-3 text-sm" role="list" aria-label="Social media links">
                                <li><a href="#" aria-label="Facebook" className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline hover:scale-110 hover:shadow-lg transition-all duration-200 border-0">FB</a></li>
                                <img src={Ellipse} alt="" role="presentation" />
                                <li><a href="#" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline hover:scale-110 hover:shadow-lg transition-all duration-200 border-0">IN</a></li>
                                <img src={Ellipse} alt="" role="presentation" />
                                <li><a href="#" aria-label="Dribbble" className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline hover:scale-110 hover:shadow-lg transition-all duration-200 border-0">DR</a></li>
                                <img src={Ellipse} alt="" role="presentation" />
                                <li><a href="#" aria-label="Behance" className="hover:text-blue-700 dark:hover:text-blue-400 hover:underline hover:scale-110 hover:shadow-lg transition-all duration-200 border-0">BE</a></li>
                            </ul>
                        </div>
                    </main>
                </div>
            </section>
        </>
    )
}

export default Home
