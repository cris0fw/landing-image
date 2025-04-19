import React from "react";

const MiniCardTestimonials = ({ image2, name }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration={800}
      className="flex flex-col gap-4 px-5 w-full  border-l-[10px] border-l-blue lg:max-w-[400px] rounded-md shadow-md py-5 bg-white"
    >
      <div className="flex justify-start items-center  gap-3">
        <img
          className="w-12 rounded-full"
          src={`/landing-image/${image2}`}
          alt="mini card testimonials"
        />

        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          <p className="text-sm">Co-Founder, XYZ Inc.</p>
        </div>
      </div>

      <p className="lg:max-w-[400px] italic text-[14px] leading-[1.6] font-light text-[#6C757D] font-nunito">
        “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae
        ipsa asperiores inventore aperiam iure?”
      </p>
    </div>
  );
};

export default MiniCardTestimonials;
