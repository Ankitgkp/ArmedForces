const facts = [
    { text: "Bravery in every mission", color: "text-red-400" },
    { text: "Discipline shapes character", color: "text-yellow-400" },
    { text: "Serve with pride", color: "text-green-400" },
    { text: "Unity in diversity", color: "text-blue-400" },
    { text: "Courage under fire", color: "text-purple-400" },
    { text: "Honor above all", color: "text-orange-400" },
    { text: "Strength through sacrifice", color: "text-pink-400" },
    { text: "Legacy of heroes", color: "text-teal-400" },
  ];
  
  const framePositions = [
    "top-0 left-[25%]",
    "top-[10%] left-[48%]",
    "top-[28%] left-[10%]",
    "top-[28%] left-[35%]",
    "top-[28%] left-[60%]",
    "top-[48%] left-[22%]",
    "top-[48%] left-[48%]",
    "top-[65%] left-[35%]",
  ];
  
  const ArmyFactsFrames = () => {
    return (
      <div className="relative bg-[#2B2E31] py-32 overflow-hidden">
        <h2 className="text-4xl sm:text-5xl font-bold text-white text-center mb-20">
          Why Join the Indian Army?
        </h2>
  
        <div className="relative w-[90vw] max-w-5xl h-[500px] mx-auto">
          {facts.map((fact, index) => (
            <div
              key={index}
              className={`absolute ${framePositions[index]} ml-15 w-40 h-36 bg-[#3A3F44] border border-zinc-600 shadow-lg flex items-center justify-center font-semibold text-center text-sm px-2 rotate-${index % 2 === 0 ? '1' : '-2'}`}
            >
              <p className={`${fact.color}`}>{fact.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ArmyFactsFrames;
  