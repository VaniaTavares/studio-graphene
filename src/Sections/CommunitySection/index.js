import React from "react";
import { DisplayCard, SectionTitle } from "../../Components";
import images, { community } from "../../Constants and Functions/Images";
import "./index.css";

const CommunitySection = () => {
  return (
    <section id="community" className="flex__start section__padding">
      <SectionTitle text="Meet Our Community" styles={true} />
      <div className="app__community-container">
        {community.map((post, index) => (
          <div
            key={"a" + Math.floor(Math.random() * 100)}
            className={index % 2 === 0 ? "flex__row" : "flex__reverse"}
          >
            <div className="app__community-image__container">
              <img src={images.loading} alt="dish" />
            </div>
            <DisplayCard
              image={post.image}
              title={post.title}
              comment={post.comment}
              direction="row"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection;
