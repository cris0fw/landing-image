import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-4 flex flex-col items-center gap-8 md:gap-10 bg-white text-gray-700">
      {/* Redes Sociales */}
      <div className="flex gap-7">
        <FaFacebookF
          className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"
          size={14}
        />
        <FaTwitter
          className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"
          size={14}
        />
        <FaInstagram
          className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"
          size={14}
        />
        <FaLinkedinIn
          className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"
          size={14}
        />
        <FaPinterest
          className="text-blue-500 hover:scale-110 transition-transform cursor-pointer"
          size={14}
        />
      </div>

      {/* Texto */}
      <p className="text-center text-sm text-gray-500 max-w-md">
        ©2025 All rights reserved | Made with ❤️ by Cristian Ludueña
      </p>
    </footer>
  );
};

export default Footer;
