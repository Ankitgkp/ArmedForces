import React, { useState } from "react";

const faqs = [
  {
    question: "What is the minimum age to join the Indian Navy?",
    answer: "The minimum age to join is 17 years for sailors and 19 years for officers.",
  },
  {
    question: "How can I join the Indian Navy as an officer?",
    answer: "You can join through NDA, CDS, INET, 10+2 B.Tech entry, and other schemes like NCC and UES.",
  },
  {
    question: "Is physical fitness mandatory for Navy selection?",
    answer: "Yes, physical fitness and medical standards are essential for selection into the Indian Navy.",
  },
  {
    question: "What is the training duration for Navy officers?",
    answer: "Training varies by entry, but typically includes 22 weeks at INA followed by further specialization.",
  },
  {
    question: "Can women join the Indian Navy?",
    answer: "Yes, women can join the Navy through various officer entries including SSC and CDS.",
  },
  {
    question: "Do I need to know swimming to join the Navy?",
    answer: "Swimming is not mandatory during entry but is part of the training curriculum.",
  },
  {
    question: "What educational qualification is required?",
    answer: "For officer entries like NDA and INET, 10+2 or graduation is required, based on the entry scheme.",
  },
  {
    question: "Is there any written exam for joining the Navy?",
    answer: "Yes, entries like NDA, CDS, and INET require written exams.",
  },
  {
    question: "What is SSB in the Navy?",
    answer: "SSB (Services Selection Board) is a five-day personality and intelligence interview process for officer candidates.",
  },
  {
    question: "Is the Indian Navy a permanent job?",
    answer: "Yes, there are permanent commission entries, and short service commission options generally for 10 years.",
  },
];

const NavyFAQ = () => {
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

export default NavyFAQ;
