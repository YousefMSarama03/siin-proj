import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Ellipse from "../../assets/NavAssests/Ellipse.svg";
import siin from "../../assets/NavAssests/siin.svg";
import SearchIcon from "./SearchIcon";
import Hr from "../../assets/NavAssests/hr.svg";
import Burger from "../../assets/NavAssests/burger.svg";
import BurgerBlack from "../../assets/NavAssests/burger-black.svg";
import light from "../../assets/NavAssests/Union.svg";
import moon from "../../assets/NavAssests/Half-moon.svg";
import { useTheme } from "../../contexts/ThemeContext";

const NavBar = () => {
    const [isOpened, setOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        // Cleanup function to restore scrolling when component unmounts
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpened]);

    return (
        <>
            {/* Navbar */}
            <nav className="w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md text-black dark:text-white fixed border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300 shadow-sm" role="navigation" aria-label="Main navigation">
                <div className="px-4 md:px-7 lg:px-[102px] flex items-center justify-between h-20">
                    {/* Left Social Icons */}
                    <div className="hidden md:flex">
                        <ul className="flex space-x-3 text-sm" role="list" aria-label="Social media links">
                            <li><a href="#" aria-label="Facebook" className="hover:text-blueSiin transition-colors">FB</a></li>
                            <img src={Ellipse} alt="" role="presentation" />
                            <li><a href="#" aria-label="LinkedIn" className="hover:text-blueSiin transition-colors">IN</a></li>
                            <img src={Ellipse} alt="" role="presentation" />
                            <li><a href="#" aria-label="Dribbble" className="hover:text-blueSiin transition-colors">DR</a></li>
                            <img src={Ellipse} alt="" role="presentation" />
                            <li><a href="#" aria-label="Behance" className="hover:text-blueSiin transition-colors">BE</a></li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="opacity-100 transition-opacity hover:opacity-70"
                    >
                        <img
                            src={siin}
                            alt="Siin Logo"
                            className="h-[26.5] w-[80px] md:w-[94px] lg:w-[119px] cursor-pointer"
                        />
                    </Link>

                    {/* Right Icons */}
                    <div className="flex items-center md:flex xl:gap-10 md:gap-5">
                        <button aria-label="Search" className="cursor-pointer hover:opacity-70 transition-opacity">
                            {/* <SearchIcon className="w-6 h-6 text-black dark:text-white transition-colors" /> */}
                        </button>
                        <img src={Hr} alt="" role="presentation" className={`w-[3px] ${isOpened ? "invisible" : "md:flex"}`} />

                        {/* Burger Menu Button */}
                        <button 
                            className="inline-flex items-center cursor-pointer px-3 rounded-lg hover:opacity-70 transition-opacity" 
                            onClick={() => setOpen(!isOpened)}
                            aria-label={isOpened ? "Close menu" : "Open menu"}
                            aria-expanded={isOpened}
                        >
                            <img src={isDarkMode ? Burger : BurgerBlack} alt="menu" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Background Blur Overlay */}
            <div 
                className={`fixed inset-0 h-screen w-screen backdrop-blur-md bg-black/20 dark:bg-black/40 transition-all duration-300 z-[90] ${isOpened ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Sidebar Menu */}
            <div 
                className={`fixed top-0 right-0 flex flex-col justify-between h-screen w-80 sm:w-80 backdrop-blur-xl transition-transform duration-300 z-[100] ${isOpened ? "translate-x-0 bg-white/95 dark:bg-[#18181b]/95 shadow-2xl" : "translate-x-full"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Close Button */}
                <div className="flex h-[112px] border-b border-gray-200 dark:border-gray-700 items-center px-6">
                    <button 
                        className="relative left-14 cursor-pointer hover:opacity-70 transition-opacity" 
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        <img src={isDarkMode ? Burger : BurgerBlack} alt="menu" width="85px" />
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-8 text-black dark:text-white items-left pl-8 relative bottom-20" role="navigation" aria-label="Main menu">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Services", path: "/services" },
                        { name: "Contact", path: "/contact" }
                    ].map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={`cursor-pointer duration-300 px-4 py-3 rounded-lg transition-all text-lg font-semibold ${activeLink === item.path ? "text-blueSiin font-bold bg-blueSiin/10 dark:bg-blueSiin/20 scale-105" : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blueSiin hover:scale-105"}`}
                            aria-current={activeLink === item.path ? "page" : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Light/Dark Mode Toggle */}
                <div className="h-[80px] w-full flex justify-center items-center p-2 mb-4">
                    <div className="flex justify-center bg-gray-100 dark:bg-[#232323] rounded-xl w-full max-w-[280px] shadow-sm">
                        <button
                            onClick={toggleTheme}
                            className={`flex px-2 py-2 w-1/2 gap-1 justify-center rounded-lg transition-all duration-300 font-semibold text-xs sm:text-sm
                                ${!isDarkMode ? 'bg-blueSiin text-white shadow' : 'text-gray-500 hover:text-blueSiin'}
                            `}
                            aria-pressed={!isDarkMode}
                        >
                            <img src={light} alt="light" width="14px" className="sm:w-4" />
                            <span className="hidden sm:inline">Light</span>
                            <span className="sm:hidden">L</span>
                        </button>
                        <button
                            onClick={toggleTheme}
                            className={`flex px-2 py-2 w-1/2 gap-1 justify-center rounded-lg transition-all duration-300 font-semibold text-xs sm:text-sm
                                ${isDarkMode ? 'bg-blueSiin text-white shadow' : 'text-gray-500 hover:text-blueSiin'}
                            `}
                            aria-pressed={isDarkMode}
                        >
                            <img src={moon} alt="moon" width="14px" className="sm:w-4" />
                            <span className="hidden sm:inline">Dark</span>
                            <span className="sm:hidden">D</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
