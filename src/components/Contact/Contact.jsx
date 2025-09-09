import React, { useState } from 'react';
import Tag from "../../assets/homeAssests/Tag.svg";
import N from "../../assets/homeAssests/N.svg";
import Contact from "../../assets/homeAssests/contact.svg";
import Button from "../../assets/homeAssests/Button.svg";
import Line from "../../assets/homeAssests/Line.svg";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const services = [
    'Software Development',
    'Data Analysis',
    'Cloud Services',
    'Cyber Security',
    'Technical Consulting',
    'UI/UX Design'
  ];

  return (
  <section className="min-h-screen bg-white text-gray-800 dark:bg-black dark:text-white transition-colors duration-300 pt-28">
      <div className='max-lg:px-4'>
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row w-full">
          <div className="relative hidden w-full lg:w-[35%] h-auto md:h-[780px] lg:flex items-center justify-start pt-10 md:pt-28">
            <img src={Tag} alt="Tag" className='w-[3rem] relative z-50 left-[55px] bottom-14 h-auto md:w-[3rem] md:h-[35rem]' />
            <h1 className="text-2xl md:text-4xl relative left-[11rem] bottom-[19rem] mt-4 font-bold text-gray-900 dark:text-white">
              <span className='underline decoration-gray-500/60 dark:decoration-gray-500/60 light:decoration-gray-300/60 decoration-2 underline-offset-[1rem]'>CO</span>NTACT
            </h1>
            <img src={N} alt="N image" className='absolute w-[30rem] mt-24 top-24 right-4 md:top-28 md:right-auto' />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center lg:text-left text-start lg:p-24">
            <div className='text-start uppercase text-3xl lg:hidden py-9 text-gray-900 dark:text-white font-bold'>
              <span className='underline decoration-slate-50 decoration-1 underline-offset-[1rem]'>CON</span>TACT
            </div>

            <div className="mb-6 text-3xl tracking-widest leading-[60px] uppercase text-gray-900 dark:text-white font-bold">
              Let's start your digital journey together.
            </div>

            <div className=''>
              <p className="text-2xl leading-[50px] uppercase text-justify text-gray-700 dark:text-gray-300">
                Ready to transform your business with cutting-edge digital solutions?
                Get in touch with our team of experts and let's discuss how we can help
                you achieve your goals.
              </p>
              <a href="#contact-form">
                <img src={Contact} alt="contact icon" className='lg:w-[8rem] w-[6rem] mt-2 inline cursor-pointer hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200' />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="relative w-full mt-12 md:mt-16">
          <div className="relative flex flex-col lg:flex-row justify-around items-baseline">
            <div className="w-[90%] md:w-[35rem] pt-7">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-500 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            <img
              src={Button}
              alt="button icon"
              className="relative top-6 w-[8rem] max-lg:left-[250px] lg:w-[14rem] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200"
            />
          </div>

          <img
            src={Line}
            alt="Line"
            className="absolute -z-50 top-36 left-[195px] w-[90%] hidden lg:flex lg:w-[1200px]"
          />

          {/* Contact Form */}
          <div className="lg:px-[190px] mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blueSiin">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blueSiin rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          123 Digital Street<br />
                          Tech District, Cyprus<br />
                          CY-12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blueSiin rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">+357 123 456 789</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blueSiin rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">hello@siin.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blueSiin rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">🕒</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Business Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-200">
                      <span className="text-gray-700 dark:text-white text-sm font-bold">in</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 dark:hover:bg-pink-400 hover:scale-110 hover:shadow-lg transition-all duration-200">
                      <span className="text-gray-700 dark:text-white text-sm font-bold">ig</span>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-900 dark:hover:bg-blue-400 hover:scale-110 hover:shadow-lg transition-all duration-200">
                      <span className="text-gray-700 dark:text-white text-sm font-bold">x</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/90 dark:bg-[#18181b] rounded-2xl p-8 shadow-xl transition-colors">
                <h3 className="text-2xl font-bold mb-6 text-blueSiin">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                        Full Name <span className="text-blueSiin">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all border-0 hover:shadow-lg"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                        Email Address <span className="text-blueSiin">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all border-0 hover:shadow-lg"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all border-0 hover:shadow-lg"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all border-0 hover:shadow-lg"
                        placeholder="+357 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all border-0 hover:shadow-lg"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-white mb-2">
                      Message <span className="text-blueSiin">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-100/80 dark:bg-gray-800/80 text-black dark:text-white rounded-xl placeholder-gray-500 dark:placeholder-gray-400 shadow-sm focus:shadow-lg focus:ring-2 focus:ring-blueSiin focus:outline-none transition-all resize-none border-0 hover:shadow-lg"
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blueSiin text-white py-4 px-8 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-lg transition-all duration-200 focus:ring-2 focus:ring-blueSiin focus:outline-none"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:px-[160px] ">
        <Footer />
      </div>
    </section>
  );
};

export default ContactPage;
