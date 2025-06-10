/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const regiments = [
  { name: "Ladakh Scouts", image: "https://i.postimg.cc/vmVy5vgr/Ladakh-Scouts-removebg-preview.png", link: "https://www.indianarmy.nic.in" },
  { name: "Jammu and Kashmir Light Infantry", image: "https://i.postimg.cc/d1Gqc9Js/Jammu-and-Kashmir-Light-Infantry-Insignia-India-svg.png", link: "https://www.indianarmy.nic.in" },
  { name: "Brigade of The Guards", image: "https://i.postimg.cc/sxcsvDBb/Brigade-of-the-Guards-Insignia-India-svg.png", link: "https://www.indianarmy.nic.in" },
  { name: "Mahar Regiment", image: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Mahar_Regiment_Insignia_%28India%29.svg", link: "https://www.indianarmy.nic.in" },
  { name: "Grenadiers", image: "https://i.postimg.cc/5N4fDvTJ/Grenadiers-Insignia-India-svg.png", link: "https://www.indianarmy.nic.in" },
  { name: "Assam Regiment", image: "https://i.postimg.cc/wMcTLQrf/Assam-Regiment-Insignia-India-svg.png", link: "https://www.indianarmy.nic.in" },
  { name: "Bihar Regiment", image: "https://i.postimg.cc/HnB1TZRg/Bihar-Regiment.png", link: "https://www.indianarmy.nic.in" },
  { name: "Naga Regiment", image: "https://i.postimg.cc/PrTqh0LB/Naga-Regiment-Insignia-India-svg.png", link: "https://www.indianarmy.nic.in" },
];


function ArmyRegimentsMarquee() {
  return (
    <div className="overflow-hidden w-full bg-[#2B2E31] mb-6 py-4">
      <motion.div
        className="flex flex-wrap gap-6 md:gap-10 w-max justify-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {[...regiments, ...regiments].map((regiment, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <img
              src={regiment.image}
              alt={regiment.name}
              className="h-12 md:h-16 lg:h-18 w-auto max-w-[80px] md:max-w-[100px] object-contain grayscale opacity-80 hover:opacity-100 transition duration-300"
            />
            <span className="text-[#D7D2CB] text-xs md:text-sm mt-2">{regiment.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default ArmyRegimentsMarquee;