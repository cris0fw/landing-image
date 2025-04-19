import React from "react";
import { ourTeam } from "../libs/article";
import CardOurTeam from "../components/CardOurTeam";

const OurTeam = () => {
  return (
    <section className="pt-28 pb-12 px-7 overflow-hidden">
      <div
        data-aos="fade-up"
        data-aos-duration={800}
        className="flex flex-col items-center space-y-5"
      >
        <h2 className="text-center font-nunito text-4xl font-semibold">
          Our Team
        </h2>
        <p className="text-center font-nunito text-[17px] text-[#6C757D] lg:max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
          quaerat sapiente nam, id vero.
        </p>
      </div>

      <div className="max-w-5xl mx-auto justify-items-center grid md:grid-cols-2 lg:grid-cols-3 py-20 gap-8 lg:gap-y-7">
        {ourTeam.map((item) => {
          return (
            <CardOurTeam
              key={item.id}
              image={item.image}
              name={item.name}
              skill={item.skill}
              delay={item.id * 200}
            />
          );
        })}
      </div>
    </section>
  );
};

export default OurTeam;
