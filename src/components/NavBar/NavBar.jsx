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
            {/* Modern Navbar */}
            <nav className="w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-xl text-black dark:text-white fixed border-b border-gray-200/30 dark:border-gray-700/30 transition-all duration-300 shadow-lg" role="navigation" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Left Section - Social Icons (Desktop Only) */}
                       

                        {/* Center Section - Logo */}
                        <div className="flex-1 flex justify-center lg:justify-start">
                            <Link
                                to="/"
                                className="flex items-center space-x-2 group"
                            >
                                <img
                                    src={siin}
                                    alt="Siin Logo"
                                    className="h-8 w-auto sm:h-10 lg:h-12 transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Right Section - Theme Toggle & Menu */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                            {/* Theme Toggle (Desktop) */}
                            <div className="hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                                <button
                                    onClick={toggleTheme}
                                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                                        !isDarkMode 
                                            ? 'bg-white shadow-md text-gray-900' 
                                            : 'text-gray-400 hover:text-gray-300'
                                    }`}
                                    aria-label="Light mode"
                                >
                                    <img src={light} alt="light" width="16px" />
                                </button>
                                <button
                                    onClick={toggleTheme}
                                    className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                                        isDarkMode 
                                            ? 'bg-gray-700 shadow-md text-white' 
                                            : 'text-gray-400 hover:text-gray-300'
                                    }`}
                                    aria-label="Dark mode"
                                >
                                    <img src={moon} alt="moon" width="16px" />
                                </button>
                            </div>

                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="sm:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                <img src={isDarkMode ? light : moon} alt="theme toggle" width="20px" />
                            </button>

                            {/* Menu Button */}
                            <button 
                                className="relative inline-flex items-center justify-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105" 
                                onClick={() => setOpen(!isOpened)}
                                aria-label={isOpened ? "Close menu" : "Open menu"}
                                aria-expanded={isOpened}
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isOpened ? 'rotate-45 translate-y-1' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isOpened ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-300 ${isOpened ? '-rotate-45 -translate-y-1' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Background Blur Overlay */}
            <div 
                className={`fixed inset-0 h-screen w-screen backdrop-blur-md bg-black/20 dark:bg-black/40 transition-all duration-300 z-[90] ${isOpened ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* Modern Sidebar Menu */}
            <div 
                className={`fixed top-0 right-0 flex flex-col h-screen w-80 sm:w-96 backdrop-blur-2xl transition-transform duration-300 z-[100] ${isOpened ? "translate-x-0 bg-white dark:bg-black shadow-2xl border-l border-gray-200/20 dark:border-gray-700/20" : "translate-x-full"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-gray-700/20">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                    <button 
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300" 
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className="block w-5 h-0.5 bg-current rotate-45"></span>
                            <span className="block w-5 h-0.5 bg-current -rotate-45 -translate-y-0.5"></span>
                        </div>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8" role="navigation" aria-label="Main menu">
                    <div className="space-y-2">
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
                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 text-lg font-medium ${
                                    activeLink === item.path 
                                        ? "text-blueSiin bg-blueSiin/10 dark:bg-blueSiin/20 shadow-md scale-105" 
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blueSiin hover:scale-105"
                                }`}
                                aria-current={activeLink === item.path ? "page" : undefined}
                            >
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Theme</h3>
                        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                            <button
                                onClick={toggleTheme}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 text-sm font-medium ${
                                    !isDarkMode 
                                        ? 'bg-white shadow-sm text-gray-900' 
                                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                                aria-pressed={!isDarkMode}
                            >
                                <img src={light} alt="light" width="16px" />
                                <span>Light</span>
                            </button>
                            <button
                                onClick={toggleTheme}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 text-sm font-medium ${
                                    isDarkMode 
                                        ? 'bg-gray-600 shadow-sm text-white' 
                                        : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                                aria-pressed={isDarkMode}
                            >
                                <img src={moon} alt="moon" width="16px" />
                                <span>Dark</span>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-gray-200/20 dark:border-gray-700/20">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                            S
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">SIIN</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Digital Solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
