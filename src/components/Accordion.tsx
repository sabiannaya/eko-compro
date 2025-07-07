"use client";
import React, { useState } from "react";

const Accordion = ({ title, content }: { title: string; content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion py-4 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50">
      <button
        className="accordion-toggle group flex flex-row items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
        aria-expanded={isOpen}
        onClick={toggleAccordion}
      >
        <h5>{title}</h5>
        <svg
          className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${
            isOpen ? "rotate-180 text-indigo-600" : ""
          }`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500`}
        style={{
          maxHeight: isOpen ? 250 : 0,
        }}
        aria-hidden={!isOpen}
      >
        <p className="text-base text-gray-900 leading-6 py-2">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
