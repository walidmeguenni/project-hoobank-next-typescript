import { features } from "../constants";
import React from "react";
import styles, { layout } from "styles/styles";
import Button from "./Button";
import Image from "next/image";
type featureType = {
  icon: any;
  title: string;
  content: string;
  index: number;
};
const FeatureCard: React.FC<featureType> = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index === features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={` w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex flex-col flex-1 ml-5">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business: React.FC = () => (
  <section id="features" className={`${layout.section} `}>
    <div className={`${layout.sectionInfo}`}>
      <h1 className={`${styles.heading2}`}>
        You do the business,
        <br className="ss:block hidden" />
        we’ll handle the money.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((value, index) => (
        <FeatureCard key={value.id} index={index} {...value} />
      ))}
    </div>
  </section>
);

export default Business;
