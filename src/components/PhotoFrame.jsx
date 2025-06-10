import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const legends = [
  {
    name: "Captain Vikram Batra",
    birth: "1974",
    death: "1999",
    title: "Param Vir Chakra - Kargil War Hero",
    img: "https://upload.wikimedia.org/wikipedia/en/5/56/Vikram_Batra_PVC.jpg",
    wiki: "https://en.wikipedia.org/wiki/Vikram_Batra",
  },
  {
    name: "Major General Ian Cardozo",
    birth: "1937",
    death: "Present",
    title: "The Legendary War Veteran",
    img: "https://im.rediff.com/news/2011/dec/08cardozo1.jpg",
    wiki: "https://en.wikipedia.org/wiki/Ian_Cardozo",
  },
  {
    name: "Brigadier Mohammad Usman",
    birth: "1912",
    death: "1948",
    title: "The Lion of Nowshera",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/07/Muhammad_Usman_%28Brigadier%29.jpg",
    wiki: "https://en.wikipedia.org/wiki/Mohammad_Usman",
  },
  {
    name: "Subedar Yogendra Singh Yadav",
    birth: "1980",
    death: "Present",
    title: "Param Vir Chakra Awardee",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Sub_Maj_%26_Hony_Capt_Yogendra_Singh_Yadav%2C_PVC.jpg",
    wiki: "https://en.wikipedia.org/wiki/Yogendra_Singh_Yadav",
  },
  {
    name: "Rifleman Jaswant Singh Rawat",
    birth: "1941",
    death: "1962",
    title: "Hero of the 1962 War",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Martyr_Jaswant_Singh_Rawat.jpg/640px-Martyr_Jaswant_Singh_Rawat.jpg",
    wiki: "https://en.wikipedia.org/wiki/Jaswant_Singh_Rawat",
  },
  {
    name: "Second Lieutenant Arun Khetarpal",
    birth: "1950",
    death: "1971",
    title: "The Tank Warrior",
    img: "https://i.pinimg.com/474x/5e/64/2f/5e642f8391ed9c69e33caa2f54834992.jpg",
    wiki: "https://en.wikipedia.org/wiki/Arun_Khetarpal",
  },
  {
    name: "Major Somnath Sharma",
    birth: "1923",
    death: "1947",
    title: "India’s First Param Vir Chakra Awardee",
    img: "https://staticimg.amarujala.com/assets/images/2022/11/02/majara-samanatha-sharama_1667412986.jpeg",
    wiki: "https://en.wikipedia.org/wiki/Somnath_Sharma",
  },
  {
    name: "Naik Jaduath Singh",
    birth: "1916",
    death: "1948",
    title: "Param Vir Chakra Awardee",
    img: "https://upload.wikimedia.org/wikipedia/en/4/43/Jadunath_Singh_PVC.jpg",
    wiki: "https://en.wikipedia.org/wiki/Jadunath_Singh",
  },
];

const PhotoFrames = () => {
  const sectionRef = useRef(null);
  const birdRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      birdRef.current,
      { y: "-100px", x: "-50px", opacity: 0, rotate: -20 },
      {
        y: "0px",
        x: "0px",
        opacity: 1,
        rotate: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#2B2E31] min-h-screen py-14 px-6 lg:px-35">
      <div className="relative flex justify-center mb-12">
        <h2 className="text-center text-5xl font-bold text-[#D7D2CB] relative">
          <img
            ref={birdRef}
            src="https://pngimg.com/d/white_dove_PNG10.png"
            alt="White Bird"
            className="absolute -top-20 left-0 w-24 h-24"
          />
          <span className="text-[#9D2444]">Legends</span> of Valor
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        {legends.map((legend, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-64 bg-[#3A3F44] overflow-hidden shadow-lg rounded-lg p-2">
              <img src={legend.img} alt={legend.name} className="w-full h-full object-cover rounded-md" />
            </div>

            <div className="mt-5 bg-[#3a3f4476] p-3 rounded-lg text-center w-48 shadow-md">
              <h3 className="text-lg font-semibold text-white">{legend.name}</h3>
              <span className="text-xs text-[#9D2444] bg-[#D7D2CB] px-3 py-1 rounded-md inline-block mt-2">
                {legend.birth} - {legend.death}
              </span>
              <p className="mt-2 text-gray-400 text-sm italic">{legend.title}</p>
              <a
                href={legend.wiki}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block bg-[#9D2444] text-white px-4 py-1 text-sm rounded-md hover:bg-[#7b1d36] transition"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoFrames;
