import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Leading from "./components/leading/leading.jsx";
import Video from "./components/Home/homeAsset/Video.svg";
import { ThemeProvider } from "./contexts/ThemeContext";

// Lazy load components for better performance
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Services = lazy(() => import("./components/Services/Section"));
const Bar = lazy(() => import("./components/Bar/Bar.jsx"));
const Contact = lazy(() => import("./components/Contact/Contact"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router> {/* ✅ Wrap with Router */}
        <div className="relative">
          {loading ? (
            <Leading />
          ) : (
            <>
              <NavBar />

              {/* Define Routes with Suspense for lazy loading */}
              <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-black">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Suspense>

              {/* 
              Floating Video Icon
              <img
                src={Video}
                alt="Video Icon"
                className="fixed right-9 bottom-5 hover:scale-105 transition-transform w-16 lg:w-26"
              />
              */}
            </>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
