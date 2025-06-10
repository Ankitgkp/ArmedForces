import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import NavyGallery from "../../components/NavyGallery";
import JoinButtonNavy from "../../components/JoinButtonNavy";
import Footer from "../../components/Footer";
import NavyFAQ from "../../components/NavyFAQ";

const stats = [
  { label: "Total Ships", value: 135 },
  { label: "Destroyers", value: 11 },
  { label: "Personnel", value: 64000 },
  { label: "Target Fleet by 2035", value: 200 },
];

const StatisticsSectionNavy = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, i) => {
      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          duration: 2,
          innerText: stats[i].value,
          ease: "power1.out",
          snap: { innerText: 1 },
          onUpdate: function () {
            counter.innerText =
              i === 2
                ? Math.floor(counter.innerText).toLocaleString()
                : Math.floor(counter.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#2B2E31] text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Navy Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-screen-lg mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div
              ref={(el) => (countersRef.current[index] = el)}
              className="text-4xl font-bold"
            >
              0
            </div>
            <div className="text-sm mt-2">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const NavyHome = () => {
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#2B2E31";
    return () => {
      document.body.style.backgroundColor = "#1f1f1f";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoChange((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Background Image Section */}
      <div className="relative opacity-90">
        <img
          src="https://i.postimg.cc/C17THMY0/648378-3.jpg"
          alt="Navy Hero"
          className="w-full h-[100vh] object-cover"
        />

        {/* Navbar */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>

        {/* Hero Text */}
        <motion.div
          layout
          className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white px-4"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={autoChange ? "hero1" : "hero2"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide"
            >
              {autoChange ? "INDIAN NAVY" : "INDIA’S SHIELD BEYOND THE HORIZON"}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Navy Statistics Section */}
      <StatisticsSectionNavy />

      {/* Other Components */}
      <NavyGallery />
      <JoinButtonNavy />
      <NavyFAQ />
      <Footer />
    </div>
  );
};

export default NavyHome;