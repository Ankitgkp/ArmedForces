import { useState, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

function JoinButton() {
  const [hovered, setHovered] = useState(false);
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoChange((prev) => !prev);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen px-20 mt-25">
      <div className="mt-10 h-[400px] w-full mx-auto">
        <img
          className="h-full w-full object-cover"
          src="src/assets/Army_soldie_1.jpeg"
          alt="Defense Image"
        />
      </div>

      <div className="relative -top-25 flex justify-center gap-8 mt-10">
        {[
          {
            title: "JOIN INDIAN ARMY",
            hoverTitle: "Click to Join",
            autoTitle: "Be a Hero, Enlist Now!",
            fact: "Serve with honor, fight with courage, and protect with pride. Be a part of the legacy that shapes the nation's future.",
            link: "https://joinindianarmy.nic.in/",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-1/3 h-[250px] p-6 bg-red/10 backdrop-blur-md rounded-lg flex flex-col justify-center items-center text-center cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => window.open(item.link, "_blank")}
          >
            <AnimatePresence mode="wait">
              <motion.h4
                key={hovered ? "hoverTitle" : autoChange ? "autoTitle" : "title"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-2xl text-[#D7D2CB] mb-4 font-serif"
              >
                {hovered ? item.hoverTitle : autoChange ? item.autoTitle : item.title}
              </motion.h4>
            </AnimatePresence>
            <p className="text-lg text-[#B8B8B8]">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinButton;
