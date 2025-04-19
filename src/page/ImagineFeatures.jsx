import React from "react";
import { cardsServices } from "../libs/article";
import Card from "../components/Card";

const ImagineFeatures = () => {
  return (
    <section
      id="features"
      className="pt-10 sm:pt-0  md:pt-0 lg:pb-32 lg:pt-0 xl:pt-0"
    >
      <div className="container mx-auto overflow-hidden">
        <div
          data-aos="fade-up"
          data-aos-duration={800}
          className="flex flex-col items-center gap-2"
        >
          <h2 className="font-bold text-xl sm:text-[35px]">Imagine Features</h2>
          <p className="text-center max-w-[230px] text-sm md:text-[16px] text-[#6C757D] font-nunito md:max-w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
            quaerat sapiente nam, id vero.
          </p>
        </div>

        <div className="grid justify-items-center  max-w-[1100px] px-6 mx-auto  mt-16 gap-y-14 md:gap-x-5 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {cardsServices.map((item) => {
            return (
              <Card
                key={item.id}
                delay={item.id * 200}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImagineFeatures;
