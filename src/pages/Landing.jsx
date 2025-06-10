import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Achievements from '../components/Achievements';
import PhotoFrames from '../components/PhotoFrame';
import JoinButton from '../components/JoinButton';
import Footer from '../components/Footer';
import ArmyRegimentsMarquee from '../components/ArmyRegimentsMarquee';
import AgeEligibilityCalculator from '../components/AgeEligibilityCalculator';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <AgeEligibilityCalculator />
      <VideoSection />
      <Achievements />
      <PhotoFrames />
      <JoinButton />
      <ArmyRegimentsMarquee />
      <Footer />
    </div>
  );
};

function Section1() {
  return (
    <div className="relative min-h-screen flex justify-center items-center overflow-hidden">
      <BackgroundImage />
      <HeroText />
    </div>
  );
}


function BackgroundImage() {
  return (
    <div className="absolute inset-0 flex justify-center md:justify-end items-center">
      <img
        className="h-auto w-[95%] sm:w-[85%] md:w-[65%] lg:w-[50%] xl:w-[45%] max-w-none object-contain brightness-30"
        src="https://cdn.pixabay.com/photo/2022/05/07/21/33/halftone-7181002_1280.png"
        alt="Map"
      />
    </div>
  );
}




function HeroText() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="font-univers text-center absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full max-w-5xl">
      <div className="absolute -top-15 right-50 transform -translate-x-1/2 w-32 sm:w-48 md:w-45 lg:w-64">
        <img src="https://i.postimg.cc/x8bdsbdH/erasebg-transformed-1.png" alt="Logo" className="w-30 object-contain" />
      </div>

      <p className="text-lg sm:text-xl md:text-3xl lg:text-6xl xl:text-8xl text-white font-semibold">
        <span className="font-light text-[#D7D2CB]">THE ARMY <br /></span>
        <span className="font-light">THE NATION NEEDS</span>
      </p>
      <p ref={textRef} className="text-sm sm:text-lg md:text-xl text-[#D7D2CB] opacity-0">
        Defending <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">INDIA</span>'s integrity and securing its future.
      </p>
    </div>
  );
}


function Section2() {
  return (
    <div className="min-h-screen px-20">
      <div className="flex items-center h-15">
        <h3 className="text-4xl text-[#D7D2CB] tracking-wider font-bold">
          <span className='text-[#9D2444]'>PILLARS</span> OF INDIA'S DEFENSE
        </h3>
      </div>

      <div className="mt-10 h-[400px] w-full mx-auto">
        <img
          className="h-full w-full object-cover"
          src="https://i.postimg.cc/tC5s89g1/india-gate-mornings.jpg"
          alt="Defense Image"
        />
      </div>

      <div className="relative -top-25 flex justify-between gap-8 mt-10">
        {[
          {
            title: "Army",
            fact: "The Indian Army is the world's second-largest army with over 1.4 million active personnel.",
          },
          {
            title: "Navy",
            fact: "INS Vikrant, India's first indigenously built aircraft carrier, boosts maritime strength.",
          },
          {
            title: "Air Force",
            fact: "The Indian Air Force has the world's fastest supersonic cruise missile, BrahMos.",
          }
        ].map((item, index) => (
          <div
            key={index}
            className="w-1/3 h-[250px] p-6 bg-red/10 backdrop-blur-md rounded-lg flex flex-col justify-center items-center text-center"
          >
            <h4 className="text-2xl text-[#D7D2CB] mb-4 font-serif">{item.title}</h4>
            <p className="text-lg text-[#B8B8B8]">{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#D7D2CB] font-bold font-univers mb-6 text-center">
        Witness the <span className='text-[#9D2444]'>Power</span> in Action
      </h2>

      <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <div className="w-full aspect-video">
          <iframe
            src="https://imagekit.io/player/embed/c9dhdggke/Hero_Animation_With_Audio.mp4?updatedAt=1749556676341&thumbnail=https%3A%2F%2Fik.imagekit.io%2Fc9dhdggke%2FHero_Animation_With_Audio.mp4%2Fik-thumbnail.jpg%3FupdatedAt%3D1749556676341&updatedAt=1749556676341"
            title="ImageKit video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
      </div>

    </div>
  );
}

export default Landing;
