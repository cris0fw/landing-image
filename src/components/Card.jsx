import React from "react";

const Card = ({ icon, title, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration={800}
      className="group bg-[#F1F1F1] w-full text-[#808080] text-sm hover:bg-[#4285F4] relative flex flex-col items-center lg:max-w-[330px] px-5 py-6 rounded-md"
    >
      {/* BLOQUE UNO CIRCULAR */}
      <div className="absolute top-[-35px] bg-[#4285F4] group-hover:bg-white p-4 rounded-full transition-colors duration-300">
        <div className="group-hover:text-[#4285F4] text-white transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* BLOQUE DOS */}
      <div className="flex flex-col gap-5 items-center">
        <h2 className="pt-10 text-black group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
        <p className="text-center text-[#808080] group-hover:text-white transition-colors duration-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quis molestiae vitae eligendi at.
        </p>
        <a
          href="#"
          className="text-[#4285F4] group-hover:text-white transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
