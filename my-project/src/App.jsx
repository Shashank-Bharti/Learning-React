import React, { useState, useEffect } from "react";

export default function SlidingPlaceholderInput() {
  const placeholders = [
    "Search for products...",
    "Try 'Laptop' or 'Headphones'",
    "Find your next gadget 🔍",
    "Looking for offers?"
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [input,setInput] = useState("")
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true); // trigger slide up

      setTimeout(() => {
        // change placeholder after animation
        setIndex((prev) => (prev + 1) % placeholders.length);
        setAnimate(false);
      }, 500); // match duration-500
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64">
      <input
        type="text"
        className="border rounded p-2 w-full placeholder-transparent focus:outline-none"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />
      <span
        className={`absolute left-3 top-2 text-gray-400 transition-all pointer-events-none translate-y- duration-500 ${
          animate ? "-translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        } ${input?"hidden":""}`}
      >
        {placeholders[index]}
      </span>
    </div>
  );
}
