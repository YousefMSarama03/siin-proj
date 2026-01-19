import React, { useState, useEffect, useCallback, memo } from "react";
import { Link, useLocation } from "react-router-dom";
import Ellipse from "../../assets/NavAssests/Ellipse.svg";
import siin from "../../assets/NavAssests/siin.svg";
import light from "../../assets/NavAssests/Union.svg";
import moon from "../../assets/NavAssests/Half-moon.svg";
import { useTheme } from "../../contexts/ThemeContext";

// Navigation items configuration
const NAV_ITEMS = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
];

// Social media links configuration
const SOCIAL_LINKS = [
    {/* name: "Facebook", href: "https://www.facebook.com/share/1JsYUEWWVw/", label: "FB" */},
    { name: "Instagram", href: "https://www.instagram.com/siin.dev?igsh=MnJ4Nm51Ym4zY3hv", label: "IN" }
];

const NavBar = memo(() => {
    const [isOpened, setOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const { isDarkMode, toggleTheme } = useTheme();

    // Memoized active link update
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

    // Optimized scroll lock with cleanup
    useEffect(() => {
        if (isOpened) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [isOpened]);

    // Memoized handlers
    const handleMenuToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleMenuClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape' && isOpened) {
            setOpen(false);
        }
    }, [isOpened]);

    // Keyboard navigation effect
    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    return (
        <>
            {/* Modern Navbar */}
            <nav className="w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-xl text-black dark:text-white fixed transition-all duration-300 shadow-lg" role="navigation" aria-label="Main navigation">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        {/* Left Section - Social Icons (Desktop Only) */}
                        <div className="hidden lg:flex lg:flex-1">
                            <ul className="flex items-center space-x-3 text-sm" role="list" aria-label="Social media links">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <React.Fragment key={social.name}>
                                        <li>
                                            <a 
                                                href={social.href} 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`Follow us on ${social.name}`} 
                                                className="hover:text-blueSiin transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blueSiin/50 rounded px-1"
                                            >
                                                {social.label}
                                            </a>
                                        </li>
                                        {/*index < SOCIAL_LINKS.length - 1 && (
                                            <li>
                                                <img 
                                                    src={Ellipse} 
                                                    alt="" 
                                                    role="presentation" 
                                                    className="w-1 h-1 opacity-60"
                                                />
                                            </li>
                                        )*/}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>

                        {/* Logo Section - Left on small/medium, center on large screens */}
                        <div className="flex items-center lg:flex-1 lg:justify-center">
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

                        {/* Right Section - Empty for balance on large screens */}
                        <div className="hidden lg:block flex-1"></div>

                        {/* Right Section - Theme Toggle & Menu */}
                        <div className="flex items-center space-x-3 sm:space-x-4">
                           

                            {/* Menu Button */}
                            <button
                                className="relative inline-flex items-center justify-center p-2 rounded-lg bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blueSiin/50"
                                onClick={handleMenuToggle}
                                aria-label={isOpened ? "Close menu" : "Open menu"}
                                aria-expanded={isOpened}
                            >
                                <div className="w-6 h-6 flex flex-col justify-center items-center">
                                    <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${isOpened ? 'rotate-45 translate-y-1' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${isOpened ? 'opacity-0' : ''}`}></span>
                                    <span className={`block w-5 h-0.5 bg-current mt-1 transition-all duration-200 ${isOpened ? '-rotate-45 -translate-y-1' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Background Blur Overlay */}
            <div
                className={`fixed inset-0 h-screen w-screen backdrop-blur-md bg-black/20 dark:bg-black/40 transition-all duration-200 z-[90] ${isOpened ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={handleMenuClose}
                aria-hidden="true"
            />

            {/* Modern Sidebar Menu */}
            <div
                className={`fixed top-0 right-0 flex flex-col h-screen w-80 sm:w-96 backdrop-blur-2xl transition-transform duration-200 z-[100] ${isOpened ? "translate-x-0 bg-white dark:bg-black shadow-2xl border-l border-gray-200/20 dark:border-gray-700/20" : "translate-x-full"}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
                aria-hidden={!isOpened}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">Menu</h2>
                    <button
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blueSiin/50"
                        onClick={handleMenuClose}
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
                        {NAV_ITEMS.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={handleMenuClose}
                                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blueSiin/50 ${activeLink === item.path
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
                    <div className="mt-8 p-4 bg-white dark:bg-black rounded-xl">
                        <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Theme</h3>
                        <div className="flex bg-gray-100 dark:bg-gray-900 rounded-lg p-1">
                            <button
                                onClick={toggleTheme}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blueSiin/50 ${!isDarkMode
                                        ? 'bg-white shadow-sm text-gray-900'
                                        : 'bg-black text-white'
                                    }`}
                                aria-pressed={!isDarkMode}
                            >
                                <img src={light} alt="Light mode" width="16" height="16" loading="lazy" />
                                <span>Light</span>
                            </button>
                            <button
                                onClick={toggleTheme}
                                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blueSiin/50 ${isDarkMode
                                        ? 'bg-black text-white'
                                        : 'bg-white text-gray-900'
                                    }`}
                                aria-pressed={isDarkMode}
                            >
                                <img src={moon} alt="Dark mode" width="16" height="16" loading="lazy" />
                                <span>Dark</span>
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-6">
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
});

NavBar.displayName = 'NavBar';

export default NavBar;
