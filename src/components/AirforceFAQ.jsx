import React, { useState } from "react";

const faqs = [
  {
    question: "What is the minimum age to join the Indian Air Force?",
    answer: "The minimum age to join is 17.5 years for airmen and 19 years for officers.",
  },
  {
    question: "How can I join the Indian Air Force as an officer?",
    answer: "You can join through NDA, CDS, AFCAT, NCC Special Entry, and Meteorology branch entries.",
  },
  {
    question: "Is physical fitness mandatory for Air Force selection?",
    answer: "Yes, physical fitness and medical standards are vital for selection into the Indian Air Force.",
  },
  {
    question: "What is the training duration for Air Force officers?",
    answer: "Training duration varies by branch, typically 74 weeks at Air Force Academy for flying officers.",
  },
  {
    question: "Can women join the Indian Air Force?",
    answer: "Yes, women can join the Air Force through entries like AFCAT, NCC Special Entry, and Meteorology.",
  },
  {
    question: "Do I need to have perfect eyesight to join the Air Force?",
    answer: "Perfect eyesight is required for flying branches, while technical branches have different standards.",
  },
  {
    question: "What educational qualification is required?",
    answer: "10+2 with Physics and Math or a graduate degree is required depending on the entry scheme.",
  },
  {
    question: "Is there any written exam for joining the Air Force?",
    answer: "Yes, entries like NDA, CDS, and AFCAT require written exams.",
  },
  {
    question: "What is SSB in the Air Force?",
    answer: "SSB (Services Selection Board) is a five-day selection process assessing personality and aptitude.",
  },
  {
    question: "Is the Indian Air Force a permanent job?",
    answer: "Yes, it offers both permanent commission and short service commission depending on the entry.",
  },
];

const AirforceFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-[#2B2E31] text-white py-16 px-4 sm:px-10 md:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-lg overflow-hidden transition-all duration-500">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            <div
              className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40 py-4' : 'max-h-0'
                }`}
            >
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirforceFAQ;
