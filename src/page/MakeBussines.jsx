import React from "react";

const MakeBussines = () => {
  return (
    <section>
      <div className="container px-5 mx-auto min-h-screen flex flex-col-reverse justify-center items-center gap-7 lg:gap-0 lg:px-10 lg:flex-row">
        <div className="flex flex-col gap-7 md:items-start justify-between  lg:items-start sm:w-[70%] lg:w-[40%]">
          <h1 className="font-semibold text-3xl leading-[1.2] font-nunito max-w-[550px] md:text-3xl lg:text-5xl">
            Make Your Business More Profitable
          </h1>
          <p className="text-sm font-nunito font-light tracking-wide leading-relaxed text-[#6C757D] md:max-w-[340px] lg:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <button className="mt-6 self-start button-global">Get Started</button>
        </div>

        <img
          src="/landing-image/investing.svg"
          alt="make bussines more profitable"
          className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
};

export default MakeBussines;
