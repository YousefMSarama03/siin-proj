import React, { useMemo } from 'react';
import './BarCss.css';
import Footer from '../Footer/Footer';
import usePageTitle from '../../hooks/usePageTitle';

const ScrollingBar = () => {
  usePageTitle("Bar");
  
  // Memoize services list to prevent unnecessary re-renders
  const services = useMemo(() => [
    "DATA ANALYSIS",
    "CLOUD COMPUTING", 
    "CYBER SECURITY",
    "BRANDING",
    "SOLUTIONS",
    "DEVELOPMENT",
    "SOFTWARE",
    "UI/UX",
    "CLOUDING"
  ], []);

  return (
  <section className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white transition-colors duration-300 border-0 pt-24 sm:pt-28">
      <div className='max-lg:px-4'>
        <div className="scrolling-bar rotate-12" role="banner" aria-label="Services showcase">
          <ul className='text-gray-900 dark:text-white border-0' role="list">
            {services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ScrollingBar;
