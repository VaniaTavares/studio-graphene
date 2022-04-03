import React from "react";

const SectionTitle = ({ text, styles }) => {
  return (
    <h2 className={styles ? "section__title margin__bottom" : "section__title"}>
      {text}
    </h2>
  );
};

export default SectionTitle;
