
import React, { useMemo } from 'react';
import Tag from "../../assets/homeAssests/Tag.svg";
import N from "../../assets/homeAssests/N.svg";
import Contact from "../../assets/homeAssests/contact.svg";
import Button from "../../assets/homeAssests/Button.svg";
import Line from "../../assets/homeAssests/Line.svg";
import Footer from "../Footer/Footer";

const Services = () => {
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
  <section className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 pt-28">
      <div className="max-lg:px-4">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="relative hidden w-full lg:w-[35%] h-auto md:h-[780px] lg:flex items-center justify-start pt-10 md:pt-28">
            <img src={Tag} alt="Tag" className='w-[3rem] relative z-50 left-[55px] bottom-14 h-auto md:w-[3rem] md:h-[35rem]' />
            <h1 className="text-2xl md:text-4xl relative left-[11rem] bottom-[19rem] mt-4 text-white">
              <span className='underline decoration-gray-500/60 decoration-2 underline-offset-[1rem]'>SE</span>RVICES
            </h1>
            <img src={N} alt="N image" className='absolute w-[30rem] mt-24 top-24 right-4 md:top-28 md:right-auto' />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center lg:text-left text-start lg:p-24">
            <div className='text-start uppercase text-3xl lg:hidden py-9'>
              <span className='underline decoration-slate-50 decoration-1 underline-offset-[1rem]'>SER</span>VICES
            </div>

            <div className="mb-6 text-3xl tracking-widest leading-[60px] uppercase">
              We provide comprehensive digital solutions.
            </div>
            
            <div className=''>
              <p className="text-2xl leading-[50px] uppercase text-justify">
                SIIN offers a full range of digital services to help your business thrive in the modern world. 
                From web development to cybersecurity, we deliver cutting-edge solutions tailored to your needs.
              </p>
              <a href="#services-grid">
                <img src={Contact} alt="contact icon" className='lg:w-[8rem] w-[6rem] mt-2 inline cursor-pointer hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200 border-0' />
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
  <div id="services-grid" className="relative w-full mt-12 md:mt-16 border-0">
          <div className="relative flex flex-col lg:flex-row justify-around items-baseline">
            <div className="w-[90%] md:w-[35rem] pt-7">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-300 text-lg">Comprehensive digital solutions for modern businesses</p>
            </div>
            <img
              src={Button}
              alt="button icon"
              className="relative top-6 w-[8rem] max-lg:left-[250px] lg:w-[14rem] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200 border-0"
            />
          </div>
          
          <img
            src={Line}
            alt="Line"
            className="absolute -z-50 top-36 left-[195px] w-[90%] hidden lg:flex lg:w-[1200px]"
          />

          {/* Services Cards */}
          <div className="lg:px-[190px] mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/90 text-black dark:bg-[#18181b] dark:text-white rounded-xl p-6 hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-sm hover:bg-gray-50 dark:hover:bg-[#23232b] border-0">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-blueSiin">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="inline-block bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-2 font-medium shadow-sm">
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
