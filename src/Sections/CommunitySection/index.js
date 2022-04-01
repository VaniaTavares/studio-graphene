import React from "react";
import "./index.css";
const CommunitySection = ({ tracker }) => {
  return (
    <section id="community" className="flex__start section__padding">
      <h2 className="section__title">Meet Our Community</h2>
      <div
        className={tracker === "#community" ? "app__community" : ""}
        style={{ backgroundColor: "yellow" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione
        quaerat perspiciatis magnam tenetur velit natus. Accusamus vitae
        repellendus aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam, ratione quaerat perspiciatis magnam tenetur velit
        natus. Accusamus vitae repellendus aspernatur!
      </div>
      <div style={{ backgroundColor: "beige" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione
        quaerat perspiciatis magnam tenetur velit natus. Accusamus vitae
        repellendus aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam, ratione quaerat perspiciatis magnam tenetur velit
        natus. Accusamus vitae repellendus aspernatur!
      </div>
      <div style={{ backgroundColor: "aqua" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione
        quaerat perspiciatis magnam tenetur velit natus. Accusamus vitae
        repellendus aspernatur! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam, ratione quaerat perspiciatis magnam tenetur velit
        natus. Accusamus vitae repellendus aspernatur!
      </div>
    </section>
  );
};

export default CommunitySection;
