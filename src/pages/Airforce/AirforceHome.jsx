import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import Footer from "../../components/Footer";
import AirforceGallery from "../../components/AirforceGallery";
import JoinButtonAirforce from "../../components/JoinButtonAirforce";
import AirforceFAQ from "../../components/AirforceFAQ";

const stats = [
  { label: "Total Aircraft", value: 1716 },
  { label: "Fighter Jets", value: 542 },
  { label: "Helicopters", value: 498 },
  { label: "Years of Service", value: 93 },
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
      <h2 className="text-center text-3xl font-bold mb-8">Airforce Statistics</h2>
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
      <div className="relative opacity-90">
        <img
          src="https://media-hosting.imagekit.io/d08ef888938d4cf4/vecteezy_ai-generated-jet-black-background_36229260.jpg?Expires=1838743606&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=K9Bg5kvTP5iTaUe4mJJKsKfumIxs3ejtPsE0Upwyt-hjxLSuDYFfPG3hwQYf61NzYgmHP8i61N66NV-jY-DKBjn4l65wKL7Jj3GSQwuy0WJkghTlaNCbq1Vqcs6CQUpie6brR0b8puDGOJBmRuPyn~HypxrFJ5b0tMu6S8PRaDI6-nMbwIb8szAP1l~BcIvCnRj4L44Yg9JfVRlJxIWscp9-lEWn3YWcL8lyadADZbEokuxxD-O8X~ozd60RDLpk81hqaX6sYp-AhTsjHroYp3xuRxTOgR1mFR3YIC28c1JNdMwYamlsXEC0b~ueez6s29~XZPOgi~qN7yJruKOv~A__"
          alt="Navy Hero"
          className="w-full h-[100vh] object-cover"
        />



        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>

        <motion.div
          layout
          className="absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 text-white px-4 opacity-65"
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
              {autoChange ? "INDIAN AIRFORCE" : "INDIA’S SHIELD BEYOND THE HORIZON"}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      </div>

      <StatisticsSectionNavy />

      <AirforceGallery />
      <JoinButtonAirforce />
      <AirforceFAQ />
      <Footer />
    </div>
  );
};

export default NavyHome;