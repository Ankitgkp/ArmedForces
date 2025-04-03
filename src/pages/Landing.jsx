import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Achievements from '../components/Achievements';
import PhotoFrames from '../components/PhotoFrame';
import JoinButton from '../components/JoinButton';
import Footer from '../components/Footer';


gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  return (
    <div>
      <Navbar />
      <Section1 />
      <Section2 />
      <VideoSection />
      <Achievements />
      <PhotoFrames />
      <JoinButton />
      <Footer></Footer>
    </div>
  );
};

function Section1() {
  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <BackgroundImage />
      <HeroText />
    </div>
  );
}

function BackgroundImage() {

  return (
    <div className="absolute inset-0 flex justify-end brightness-30">
      <img className="w-auto h-auto" src="src/assets/Map.png" alt="Map.png" />
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
    <div className="font-univers text-center absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 w-full">
      <p className="text-xl text-white sm:text-2xl md:text-3xl lg:text-8xl font-semibold">
        <span className="font-light text-[#D7D2CB]">THE ARMY <br /></span>
        <span className="font-light">THE NATION NEEDS</span>
      </p>
      <p ref={textRef} className="font-univers text-[#D7D2CB] opacity-0">
        Defending <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] text-transparent bg-clip-text">INDIA</span>'s integrity and securing its future by protecting our borders and maintaining <br />peace across the nation.
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
          src="src/assets/pexels-ashutosh-anand-2147962899-29850345.jpg"
          alt="Defense Image"
        />
      </div>

      {/* Cards Section */}
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
    <div className="w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl md:text-5xl text-[#D7D2CB] font-bold font-univers mb-6">
        Witness the <span className='text-[#9D2444]'>Power</span>  in Action
      </h2>

      <div className="relative w-[100%] max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <video autoPlay controls muted controlsList="nodownload" className="w-full h-auto rounded-lg">
          <source src="src/assets/Hero_Animation_With_Audio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


export default Landing;
