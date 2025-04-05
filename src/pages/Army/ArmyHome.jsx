import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import StatisticsSection from "../../components/StatisticsSection";
import WhyJoinArmy from "../../components/WhyJoinArmy";
import ArmyRegimentsMarquee from "../../components/ArmyRegimentsMarquee";
import Gallery from "../../components/Gallery";
import JoinButton from "../../components/JoinButton";
import Footer from "../../components/Footer";
import ArmyFAQ from "../../components/ArmyFAQ";

const ArmyHome = () => {
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#2B2E31";
    return () => {
      document.body.style.backgroundColor = "#1f1f1f";
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoChange(prev => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="relative opacity-90">
      <img
        src={'https://media-hosting.imagekit.io/c845a7b438684e81/Pi7_pexels-chaikong2511-20258.jpg?Expires=1838469542&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gnlSeUd5kbSqwKlXQjUnya3yDPvSJFNivZBjN~A~Z2AT5EbeGMyYb5ZoMHmAxUnTRasB7dA4wJOVBC2crCdK9O8zGXfCC87abpvUZIb7J2UuNsGFUOssMgrUu0~57yah8aI5Y6bKTPCLbroX-pTP7UpFd8agrWZmtSbNhCvimn2FhmBUII-yrrlQPwh30bXp4WyPF95mOdHVU-3gJoh01hTBhZQ1rXzHWBMgOhx00orp4R2JOcOxtbyzt75OxlvTAFkzN7ijUP7EyOL0JIL4SKl2dmtGqfYlXaqRe8mzdqpVO3PBXdYGrTMRZcMpzBzU40XiUCC4rspY8PKwSrPb1Q__'}
        alt="Army Hero"
        className="w-full h-[100vh] object-cover"
      />

      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

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
            {autoChange ? "INDIAN ARMY" : "DEFENDERS OF THE NATION"}
          </motion.h1>
        </AnimatePresence>
      </motion.div>


    </div>
    <StatisticsSection />
    <WhyJoinArmy />
    <Gallery />
    <JoinButton />
    <ArmyFAQ />
    <ArmyRegimentsMarquee />
    <Footer />
    </div>
  );
};

export default ArmyHome;
