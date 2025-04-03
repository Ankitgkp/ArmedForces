import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Achievements from '../components/Achievements';
import PhotoFrames from '../components/PhotoFrame';
import JoinButton from '../components/JoinButton';
import Footer from '../components/Footer';
import ArmyRegimentsMarquee from '../components/ArmyRegimentsMarquee';


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
      <ArmyRegimentsMarquee />
      <Footer />
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
      <img className="w-auto h-auto" src="https://media-hosting.imagekit.io/679b6e7679ac46f9/Map.png?Expires=1838304411&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=UT6JmMpGfKKxxxR8SjFchuuV2aID9iLIpWoCttnl82ydTF~zBZqFsvFMz4NkkuVkwCAFfc7b0kniDiGyIuJGMOtEFHrzF2YElRSsE~d59xMPdx-ejwxr8SAjrqA6vsYl2BDfQm5Tfmy42jE8sMANYlql7snjts1e~xM3PuU1lJlyjfxbo67YZT-RxZdEUGKWyUQFEUowAVmlRgxv33dSpaGJLl0Uslc1LRBJhbmmt1xZ1~8PqYHO~MllW1WWI~lzUhH9a-Z7ClNBWUKapxy3Gx-LNWTBwtyHkOYXA8BVVw5kf3ez0tbeFRbJHna41dw7pu3vJx~C0PUSxd4coEJZ3g__" alt="Map.png" />
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

      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
        <img src="https://media-hosting.imagekit.io/efbb2e8e1f194392/0849a60e-c149-41b5-8707-954a6e04c91c_removalai_preview.png?Expires=1838311828&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o~s8FuBif-1X3oB4TxfRnQIV4aSwDEIq7Js~FVvk74qvVBKW8uivZJi~S1JAHmUnExPa0V85Cqw3iDhUHPt46nL5z9JWpmWvLzZbQBVzq8guHnXNX1RcLidRfdJ0yhfKPShNxBblMxLGlkP5Vzownv~vdgbpS5fbLPOTEGWx--6ZQgziAxcifqlRrQgvt5G3CmWP2~2sjxJyQM8l5TyooLNVZIPu0PCi54ynS1kQq1aohmOHHF1w3FljWg-A4TUSHGL2IJdl1vB7ZDqiebra7ad0rilq0nBu2HkwoeSvSEbhJvYwovGQFcHmRr91zSw7Tp2jFvqn6cTqnqPoKNEOSg__" alt="Logo" className="h-50 w-50 object-contain" />
      </div>
      
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
          src="https://media-hosting.imagekit.io/82c81d174b514c26/pexels-ashutosh-anand-2147962899-29850345.jpg?Expires=1838304326&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nnc0~W0c0t4oaTN0PRFRxMRLauUllIhG46UpBQqb7Xi9hf5IyKaVXj2GoP31DWLSZbexJz~Zm2w~CE2TIT~Fefik9X2DYwAuJoFtRj1fWNY9g5x~fdTmV4Xj3yAFjIX1IvxUsv3tCgPjpyazlIiyF2SDxwPjZnbDPSvPd9Mfek2g77Kbad36EZ6FQV5ZPg3cY1JOvkZmNpHXw6YsO8dbLwMSe-xK-GNDakOWCpoA3WamNM~UzlKJpUBbeerDQxeOzWDbgnD-ptu6PLCNOQ8y-Q6-9Fs-foZcREbAXjl-7u~jcwvZkeBaqysQqC1LRTiWZIO2RwK36GRDIme5ulE~XA__"
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
    <div className="w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-4xl md:text-5xl text-[#D7D2CB] font-bold font-univers mb-6">
        Witness the <span className='text-[#9D2444]'>Power</span>  in Action
      </h2>

      <div className="relative w-[100%] max-w-4xl rounded-lg overflow-hidden shadow-lg">
        <video autoPlay controls muted controlsList="nodownload" className="w-full h-auto rounded-lg">
          <source src="https://media-hosting.imagekit.io/2e0cde2b09a9491d/Hero_Animation_With_Audio.mp4?Expires=1838305376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=S8GTyoszJC66Za864fcSKJfkDuqRIYzim2YRUZOZ2WooriMzEboZKQyaQOrID0luMEM54WumHQ4zhqssDUXl5zStqaXLe~0VevL8MF47wzqHfsm1UoigUFyfXmqt6mOSoESTJ0svjkF8NIgB6q5dhsSsXMc6gtPFzwhiipyidoHFqlgSOUk6Uh8LV8CRsuj8cw-81FSXDfnx5GcTJa6bCyn3ocdBiUWTUWxJTQndB2Zk~BKcxDyi2vtjYWScGyIXAhRh~1QF5OZixERYfee6axRm5FMwxmJmKf0U6opU2eV2K7Qfg1f78xg2h7ef4HzcpLWQBfBrqTDRnetxVvwmLQ__" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}


export default Landing;
