import { quotes } from "assets";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
type FeedbackType = {
  content: string;
  name: string;
  title: string;
  img: StaticImageData;
};
const FeedbackCard: React.FC<FeedbackType> = ({
  content,
  name,
  img,
  title,
}) => (
  <div
    className={`flex justify-between flex-col items-start px-10 py-12 rounded-[20px] max-w-[370px] md:mr-5 sm:mr-3 mr-0 my-5 feedback-card`}
  >
    <Image
      src={quotes}
      alt="quotes"
      className="w-[42.6px] h-[27p.6x] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
    <div className="flex flex-row items-center">
      <Image
        src={img}
        alt="imgtestimonial"
        width={48}
        height={48}
        className="rounded-full "
      />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
