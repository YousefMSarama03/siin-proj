import React, { useState, useEffect } from 'react';
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime } from 'react-icons/md';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Tag from "../../assets/homeAssests/Tag.svg";
import N from "../../assets/homeAssests/N.svg";
import ContactIcon from "../../assets/homeAssests/contact.svg";
import Button from "../../assets/homeAssests/Button.svg";
import Line from "../../assets/homeAssests/Line.svg";
import Ellipse from "../../assets/NavAssests/Ellipse.svg";
import Footer from "../Footer/Footer";

const ContactPage = () => {
  const [Ishidden, setHidden] = useState("hidden");
  const [buttonText, setButtonText] = useState("Contact with us");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      // Option 1: EmailJS (requires setup)
      // Uncomment and configure these values after setting up EmailJS
      /*
      const serviceId = 'service_xxxxxxxxx'; // Your EmailJS service ID
      const templateId = 'template_xxxxxxxxx'; // Your EmailJS template ID
      const publicKey = 'xxxxxxxxxxxxxxxx'; // Your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        to_email: 'siin.net.co@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      */

      // Option 2: Simple form submission (for testing)
      // This will show success message but won't actually send email
      // Replace this with EmailJS code above once configured
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
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
    <section className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
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
          <div className="w-full lg:w-[65%] flex flex-col justify-center lg:text-left text-start lg:p-24 border-0">
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
              <a
                href="#More"
                onClick={() => {
                  if (Ishidden === "hidden") {
                    setHidden("block");
                    setButtonText("contact with us latter");
                    // Restore scrolling when content is revealed
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                  } else {
                    setHidden("hidden");
                    setButtonText("Contact with us");
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

        {/* Contact Form Section */}
        <div id="More" className={`${Ishidden} relative w-full mt-12 md:mt-16`}>
          <div className="relative flex flex-col lg:flex-row justify-around items-baseline">
            <div className="w-[90%] md:w-[35rem] pt-7 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-gray-500 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>
            {/*<img
              src={Button}
              alt="button icon"
              className="relative top-6 w-[8rem] max-lg:left-[250px] lg:w-[14rem] hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-900 transition-all duration-200"
            />*/}
          </div>

          

          {/* Contact Form */}
          <div className="lg:px-[190px] mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blueSiin">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <MdLocationOn className="text-2xl text-blueSiin dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Address</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Tarsana Street <br />
                        Souk Al Jumaa, Tripoli,libya<br />
                          CY-12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <MdPhone className="text-2xl text-blueSiin dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Phone</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">+218931955624‬
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <MdEmail className="text-2xl text-blueSiin dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1">Email</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">siin.net.co@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center flex-shrink-0">
                        <MdAccessTime className="text-2xl text-blueSiin dark:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-white mb-1 text-lg">Business Hours</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          <span className="text-green-600 dark:text-green-400 font-semibold">Sunday - Thursday:</span> 8:00 AM - 6:00 PM<br />
                          <span className="text-red-500 dark:text-red-400 font-semibold">Friday - Saturday:</span> Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white mb-4">Follow Us</h4>
                  <div className="hidden md:flex">
                    <ul className="flex space-x-3 text-sm" role="list" aria-label="Social media links">
                      <li><a href="https://www.facebook.com/share/1JsYUEWWVw/" aria-label="Facebook" className="hover:text-blueSiin transition-colors">FB</a></li>
                      <img src={Ellipse} alt="" role="presentation" />
                      <li><a href="https://www.instagram.com/siin.dev?igsh=MnJ4Nm51Ym4zY3hv" aria-label="instagram" className="hover:text-blueSiin transition-colors">IN</a></li>
                      {/*<img src={Ellipse} alt="" role="presentation" />
                      <li><a href="#" aria-label="Dribbble" className="hover:text-blueSiin transition-colors">DR</a></li>
                      <img src={Ellipse} alt="" role="presentation" />
                      <li><a href="#" aria-label="Behance" className="hover:text-blueSiin transition-colors">BE</a></li>*/}
                    </ul>
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
                    disabled={isLoading}
                    className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-200 focus:ring-2 focus:ring-blueSiin focus:outline-none ${
                      isLoading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blueSiin text-white hover:bg-blue-700 dark:hover:bg-blue-400 hover:scale-105 hover:shadow-lg'
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                      <p className="text-green-800 dark:text-green-200 text-center font-semibold">
                        ✅ Message sent successfully! We'll get back to you soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
                      <p className="text-red-800 dark:text-red-200 text-center font-semibold">
                        ❌ Failed to send message. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
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
