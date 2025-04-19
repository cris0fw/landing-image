import React from "react";
import MiniCardTestimonials from "./MiniCardTestimonials";

const ContentCardRow = ({ image, name, image2, reverse }) => {
  return (
    <div
      className={`container mx-auto px-6 overflow-hidden flex flex-col py-16 sm:py-20 items-center gap-8 justify-evenly ${
        reverse === "flex-row" ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:gap-0`}
    >
      <img
        className="md:max-w-[470px] lg:max-w-[550px] object-contain"
        src={`/landing-image/${image}`}
        alt="Gather Feedback"
        data-aos="fade-right"
        data-aos-duration={800}
      />

      <div className="flex flex-col gap-5 md:px-10 lg:px-0 lg:max-w-[40%]">
        <h2 className="text-4xl font-semibold lg:max-w-[400px]">
          Communicate and gather feedback
        </h2>
        <p className="text-[14px] text-[#6C757D] lg:max-w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          neque nisi architecto autem molestias corrupti officia veniam.
        </p>

        <MiniCardTestimonials name={name} image2={image2} />
      </div>
    </div>
  );
};

export default ContentCardRow;
