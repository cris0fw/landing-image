import React from "react";
import ContentCardRow from "../components/ContentCardRow";

const ComunicateGather = () => {
  return (
    <section>
      <ContentCardRow
        image="/undraw.svg"
        image2="/person1.webp"
        name="Grey Simpson"
        reverse="flex-row"
      />
      <ContentCardRow
        image="/undraw2.svg"
        image2="/person2.webp"
        name="Kimberly Gush"
        reverse="flex-row-reverse"
      />
      <ContentCardRow
        image="/undraw.svg"
        image2="/person1.webp"
        name="Grey Simpson"
        reverse="flex-row"
      />
      <ContentCardRow
        image="/undraw2.svg"
        image2="/person2.webp"
        name="Kimberly Gush"
        reverse="flex-row-reverse"
      />
    </section>
  );
};

export default ComunicateGather;
