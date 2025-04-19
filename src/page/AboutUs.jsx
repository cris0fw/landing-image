import React from "react";

const AboutUs = () => {
  return (
    <section id="aboutUs" className="bg-[#F6F6F6] py-7 px-7 lg:px-0">
      <h2 className="text-4xl font-semibold text-center pt-7 pb-16">
        About Us
      </h2>

      <div className="container mx-auto overflow-hidden flex flex-col justify-evenly items-start sm:gap-7 sm:items-center lg:gap-0 lg:flex-row">
        <img
          className="sm:max-w-[350px] md:max-w-[400px] lg:max-w-[480px]"
          src="/landing-image/undraw3.svg"
          alt="image of about us"
          data-aos="fade-right"
          data-aos-duration={800}
        />

        <div className="flex flex-col gap-6 items-start pb-24 sm:max-w-[80%] lg:max-w-[40%]">
          <h3 className="text-2xl font-semibold font-nunito">Out Mission</h3>

          <p className="text-sm text-[#6C757D] leading-[1.7] font-nunito sm:max-w-[700px] lg:max-w-[400px]">
            Eos cumque optio dolores excepturi rerum temporibus magni recusandae
            eveniet, totam omnis consectetur maxime quibusdam expedita dolorem
            dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus!
            At maiores, itaque.
          </p>

          <div className="flex flex-col gap-3 text-sm text-[#6C757D]">
            <p>✔️ Laborum enim quasi at modi</p>
            <p>✔️ Ad at tempore</p>
            <p>✔️ Labore quaerat esse</p>
          </div>

          <button className="button-global font-nunito">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
