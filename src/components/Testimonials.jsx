import React, { useEffect, useState } from "react";
import { testimonials } from "../libs/article";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[400px] bg-gray-100 px-6 ">
      <h2 className="text-3xl font-bold mb-6 mt-36 sm:mt-10 lg:mt-10">
        Testimonials
      </h2>

      <div className=" p-6 rounded-lg  max-w-5xl text-center">
        <img
          src={`/landing-image/${testimonials[currentIndex].image}`}
          alt={testimonials[currentIndex].name}
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <p className="italic text-2xl lg:text-text-xl  text-gray-600">
          {testimonials[currentIndex].text}
        </p>
        <h3 className="mt-4 font-semibold">
          {testimonials[currentIndex].name}
        </h3>
      </div>
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => {
          return (
            <span
              key={index}
              className={`${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
