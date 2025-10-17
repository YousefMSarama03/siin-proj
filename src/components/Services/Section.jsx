
import React, { useMemo, useState, useEffect } from 'react';
import Tag from "../../assets/homeAssests/Tag.svg";
import N from "../../assets/homeAssests/N.svg";
import Contact from "../../assets/homeAssests/contact.svg";
import Button from "../../assets/homeAssests/Button.svg";
import Line from "../../assets/homeAssests/Line.svg";
import Footer from "../Footer/Footer";

const Services = () => {
  const [Ishidden, setHidden] = useState("hidden");
  const [buttonText, setButtonText] = useState("Explore Siin's services");

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    // Reset scroll position to top
    window.scrollTo(0, 0);
    
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  // Memoize services data to prevent unnecessary re-renders
  const services = useMemo(() => [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      features: ["React", "Node.js", "Responsive Design", "SEO Optimized"]
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS", "Azure", "Google Cloud", "DevOps"]
    },
    {
      title: "Data Analysis",
      description: "Business intelligence and data-driven insights for your organization",
      features: ["Analytics", "Reporting", "Visualization", "Machine Learning"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      features: ["Security Audit", "Penetration Testing", "Compliance", "Monitoring"]
    }
  ], []);

  return (
    <section className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="max-lg:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="relative hidden w-full lg:w-[35%] h-auto md:h-[780px] lg:flex items-center justify-start pt-20 md:pt-44">
            <img src={Tag} alt="Tag" className='w-[3rem] relative z-50 left-[55px] bottom-14 h-auto md:w-[3rem] md:h-[35rem]' />
            <h1 className="text-2xl md:text-4xl relative left-[8rem] md:left-[9rem] lg:left-[11rem] bottom-[17rem] md:bottom-[18rem] lg:bottom-[20rem] mt-12 font-bold text-gray-900 dark:text-white">
              <span className='underline decoration-gray-500/60 dark:decoration-gray-500/60 light:decoration-gray-300/60 decoration-2 underline-offset-[1rem]'>SE</span>RVICES
            </h1>
            <img src={N} alt="N image" className='absolute w-[30rem] mt-24 top-24 right-4 md:top-28 md:right-auto' />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center lg:text-left text-start lg:p-24 border-0">
            <div className='text-start uppercase text-3xl lg:hidden py-[5rem] font-bold text-gray-900 dark:text-white'>
              <span className='underline decoration-slate-50 decoration-1 underline-offset-[1rem]'>SER</span>VICES
            </div>

            <div className="mb-6 text-3xl tracking-widest leading-[60px] uppercase font-bold text-gray-900 dark:text-white">
              We provide comprehensive digital solutions.
            </div>

            <div >
              <p className="text-2xl md:leading-[50px] uppercase text-justify text-gray-700 dark:text-gray-300">
                SIIN offers a full range of digital services to help your business thrive in the modern world.
                From web development to cybersecurity, we deliver cutting-edge solutions tailored to your needs.
              </p>
              <a
                href="#More"
                onClick={() => {
                  if (Ishidden === "hidden") {
                    setHidden("block");
                    setButtonText("hide Siin's services");
                    // Restore scrolling when content is revealed
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                    } else {
                      setHidden("hidden");
                      setButtonText("Explore Siin's services");
                      // Hide scrolling when content is hidden
                      document.body.style.overflow = 'hidden';
                      document.documentElement.style.overflow = 'hidden';
                      // Scroll to top when hiding content
                      window.scrollTo(0, 0);
                    }
                }}
                className='mt-2 inline-flex items-center gap-3 cursor-pointer select-none px-4 py-2 rounded-lg uppercase tracking-wider font-semibold
                             text-blueSiin underline decoration-blueSiin decoration-2 underline-offset-4
                             transition-all duration-300 ease-out
                             hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg hover:bg-blueSiin/5 dark:hover:bg-blueSiin/10'
              >
              <span>{buttonText}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div id="More" className={`${Ishidden} relative w-full mt-12 md:mt-16 border-0`}>
          <div className="relative flex flex-col lg:flex-row justify-around items-baseline">
            <div className="w-[90%] md:w-[35rem] pt-7 md:text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-300 text-lg">Comprehensive digital solutions for modern businesses</p>
            </div>
            
          </div>

          

          {/* Services Cards */}
          <div className="lg:px-[190px] mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-black dark:text-white p-6 hover:scale-105 transition-all duration-200 border-0">
                  <h3 className="text-2xl font-extrabold mb-4 text-blueSiin dark:text-blueSiin">{service.title}</h3>
                  <p className="mb-4 text-base font-semibold leading-relaxed text-gray-800 dark:text-gray-200">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="inline-block text-blueSiin dark:text-blueSiin text-[12px] px-2 py-1 rounded-full mr-2 mb-2 font-bold border-2 border-blueSiin dark:border-blueSiin">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 lg:px-[160px]">
            <Footer />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
