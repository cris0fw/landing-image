import React from "react";

const CardBlogs = ({ title, sou, image }) => {
  return (
    <div className="sm:flex sm:flex-col sm:items-center">
      <img src={`/landing-image/${image}`} alt="blog de imagen" />

      <div className="py-7 space-y-2 sm:self-start sm:px-14 md:px-0">
        <h2 className="text-2xl font-nunito">{title}</h2>
        <p className="text-[12px] font-nunito text-[#6C757D]">
          {sou} • Jan 18, 2019•{" "}
          <span className="text-blue cursor-pointer">News</span>
        </p>
      </div>

      <div className="space-y-4 sm:px-14 md:px-0">
        <p className="text-sm font-nunito text-[#6C757D] leading-[1.5]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit
          quaerat rerum voluptatibus a eius.
        </p>

        <a href="#" className="text-sm font-nunito text-blue">
          Continue Reading...
        </a>
      </div>
    </div>
  );
};

export default CardBlogs;
