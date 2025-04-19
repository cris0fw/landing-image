import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const CardOurTeam = ({ image, name, skill, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={800}
      data-aos-delay={delay}
      className="w-full max-[310px]"
    >
      <img
        src={`/landing-image/${image}`}
        className="w-full"
        alt="Imagen of the our tema"
      />

      {/* Barra social oculta que aparece desde arriba */}
      <div className="absolute top-[57%] left-0 w-full flex justify-center items-center gap-5 bg-blue-500 h-[50px] translate-y-[100%] opacity-0 transition-all duration-200 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 z-10">
        <FaFacebookF className="text-white cursor-pointer" />
        <FaTwitter className="text-white cursor-pointer" />
        <FaInstagram className="text-white cursor-pointer" />
      </div>

      <div className="px-2 py-7">
        <div className="space-y-1">
          <p className="text-[16px] font-nunito">{name}</p>
          <p className="text-[11px] text-blue font-nunito">{skill}</p>
        </div>

        <p className="text-sm text-[#6C757D] mt-5 leading-[1.6]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          excepturi corporis qui doloribus perspiciatis ipsa modi accusantium
          repellat.
        </p>
      </div>
    </div>
  );
};

export default CardOurTeam;
