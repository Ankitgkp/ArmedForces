import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import armyHero from "../../assets/Pi7_pexels-chaikong2511-20258.jpg";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import StatisticsSection from "../../components/StatisticsSection";
import WhyJoinArmy from "../../components/WhyJoinArmy";
import ArmyRegimentsMarquee from "../../components/ArmyRegimentsMarquee";
import Gallery from "../../components/Gallery";

const ArmyHome = () => {
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "black";
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
        src={armyHero}
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
    </div>
  );
};

export default ArmyHome;
