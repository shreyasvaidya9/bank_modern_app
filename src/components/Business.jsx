import React from "react";

import Button from "./Button";
import FeatureCard from "./FeatureCard";

import { features } from "../constants";
import styles, { layout } from "../styles";

const { heading2, paragraph } = styles;
const { section, sectionInfo, sectionImg } = layout;

const Business = () => {
  return (
    <section id="features" className={`${section}`}>
      <div className={`${sectionInfo}`}>
        <h2 className={`${heading2}`}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${sectionImg} flex-col`}>
        {features.map((feature, index) => {
          const { id, icon, title, content } = feature;

          return (
            <FeatureCard
              key={id}
              icon={icon}
              title={title}
              content={content}
              index={index}
              length={features.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Business;
