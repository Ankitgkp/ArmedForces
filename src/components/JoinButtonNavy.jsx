import { useState, useEffect } from "react";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

function JoinButtonNavy() {
  const [hovered, setHovered] = useState(false);
  const [autoChange, setAutoChange] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoChange((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-5 sm:px-10 lg:px-20 mt-10 bg-#2B2E31">
      <div className="mt-5 sm:mt-10 h-auto w-full mx-auto">
        <img
          className="h-auto w-full max-h-[400px] object-cover"
          src="https://images.pexels.com/photos/4130926/pexels-photo-4130926.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Defense Image"
        />
      </div>

      <div className="relative -top-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6">
        {[
          {
            title: "JOIN INDIAN NAVY",
            hoverTitle: "Click to Join",
            autoTitle: "Be a Hero, Enlist Now!",
            fact: "Serve with honor, fight with courage, and protect with pride. Be a part of the legacy that shapes the nation's future.",
            link: "https://www.joinindiannavy.gov.in/",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-2/3 lg:w-1/3 max-w-md min-h-[300px] p-6 bg-red/10 backdrop-blur-md rounded-lg flex flex-col justify-center items-center text-center cursor-pointer"
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
                className="text-lg sm:text-xl lg:text-2xl text-[#D7D2CB] mb-4 font-serif"
              >
                {hovered ? item.hoverTitle : autoChange ? item.autoTitle : item.title}
              </motion.h4>
            </AnimatePresence>
            <p className="text-sm sm:text-base text-[#B8B8B8]">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JoinButtonNavy;
