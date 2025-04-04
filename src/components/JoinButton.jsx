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
    <div className="px-5 sm:px-10 lg:px-20 mt-10">
      <div className="mt-5 sm:mt-10 h-auto w-full mx-auto">
        <img
          className="h-auto w-full max-h-[400px] object-cover"
          src="https://media-hosting.imagekit.io/eef92ecd8f034248/Army_soldie_1.jpeg?Expires=1838304492&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KC1Z0AXsF0bGM50Jk9M63-op3xfTBu85DPWsBo~RwQ6WKCUe249a4b0-9IyXrD8Le8qICBLdT52x~gCz8D0BB7KRm1JVqmm9cSyKw2hki-BDaRVyq7QJ13Ek~cO-RcFAPAPR0MYPAUFb0dnZlLZ6ERqRkPYxzpRW~4iOktCR5mCG9-VFExD3ceXzaq2jdH9nsWCOpRhZ5DXXDN~efhkyXw-lrT80fquIxBqmsBQ3HfvnB2y7XVm-Zk3RuT47LtLzgGUIvrHgKICgrJCrwqqnSUFXQiukrMVk3Y6i76sQSRfdp~KMohyIrzXAjTOyrjCBabMbqK1itNpVQLmuH6ISMQ__"
          alt="Defense Image"
        />
      </div>

      <div className="relative -top-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-6">
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

export default JoinButton;
