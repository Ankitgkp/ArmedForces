import { useEffect, useRef } from "react";
import gsap from "gsap";

const stats = [
  { label: "Years of Service", value: 75 },
  { label: "Regiments", value: 27 },
  { label: "Personnel", value: 1300000 },
  { label: "Global Military Rank", value: 4 },
];

const StatisticsSection = () => {
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
    <section className="bg-[#2B2E31] py-16 text-white text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12">Indian Army By Numbers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="p-8 bg-gradient-to-br from-[#2B2E31] via-[#36383d] to-[#2B2E31]"
          >
            <h3
              className="text-4xl font-bold text-[#9D2444]"
              ref={(el) => (countersRef.current[i] = el)}
            >
              0
            </h3>
            <p className="mt-2 text-lg text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
