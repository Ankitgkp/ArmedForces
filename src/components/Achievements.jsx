import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  return (
    <div className="achievements-section bg-[#2B2E31] py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl font-semibold text-[#D7D2CB] text-center mb-20">
          <span className="text-[#9D2444]">Indian Army</span> Achievements
        </h2>
        <div className="timeline-container flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="timeline hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#9D2444] transform -translate-y-1/2"></div>
          <Achievement
            title="Kargil War"
            date="1999"
            description="In 1999, the Indian Army recaptured all territory from intruders after the Kargil War, demonstrating exceptional valour at high altitudes."
          />
          <Achievement
            title="Counter-Insurgency"
            date="Ongoing"
            description="The Indian Army excels in complex counter-insurgency operations in Jammu and Kashmir, ensuring regional stability."
          />
          <Achievement
            title="Operation Sarvashakti"
            date="2024 / Ongoing"
            description="A major joint operation in the Rajouri-Poonch sector to counter a new wave of terrorism, targeting threats in dense forest areas."
          />
          <Achievement
            title="Pahalgam Attack Response"
            date="April 2025 / Ongoing"
            description="Following a heinous terror attack on tourists, the Army intensified security and launched widespread search operations to neutralize the perpetrators."
          />
          <Achievement
            title="Operation Sindoor"
            date="May 2025 / Ongoing"
            description="A decisive, tri-service military response targeting terror infrastructure across the border after the Pahalgam attack, showcasing India's resolve."
          />
        </div>
      </div>
    </div>
  );
};

const Achievement = ({ title, date, description }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'play none none reverse',
          once: true
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className="timeline-item relative flex-1 text-center md:text-left">
      <div className="relative z-10">
        <div className="mb-4">
          <span className="text-sm text-[#9D2444] font-medium bg-[#D7D2CB] px-3 py-1 rounded-full inline-block">
            {date}
          </span>
        </div>
        <div className="bg-[#3A3F44] p-6 rounded-lg">
          <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
          <p className="text-[#D7D2CB] text-base leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#9D2444] rounded-full md:top-1/2 md:mt-[-6px] border-2 border-[#2B2E31]"></div>
    </div>
  );
};

export default Achievements;