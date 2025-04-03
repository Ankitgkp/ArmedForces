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
    <div className="h-170 px-20 mt-25">
      <div className="mt-10 h-[400px] w-full mx-auto">
        <img
          className="h-full w-full object-cover"
          src="https://media-hosting.imagekit.io/eef92ecd8f034248/Army_soldie_1.jpeg?Expires=1838304492&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KC1Z0AXsF0bGM50Jk9M63-op3xfTBu85DPWsBo~RwQ6WKCUe249a4b0-9IyXrD8Le8qICBLdT52x~gCz8D0BB7KRm1JVqmm9cSyKw2hki-BDaRVyq7QJ13Ek~cO-RcFAPAPR0MYPAUFb0dnZlLZ6ERqRkPYxzpRW~4iOktCR5mCG9-VFExD3ceXzaq2jdH9nsWCOpRhZ5DXXDN~efhkyXw-lrT80fquIxBqmsBQ3HfvnB2y7XVm-Zk3RuT47LtLzgGUIvrHgKICgrJCrwqqnSUFXQiukrMVk3Y6i76sQSRfdp~KMohyIrzXAjTOyrjCBabMbqK1itNpVQLmuH6ISMQ__"
          alt="Defense Image"
        />
      </div>

      <div className="relative -top-25 flex justify-center gap-8 mt-8">
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
