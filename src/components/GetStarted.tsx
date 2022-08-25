import { arrowUp } from "assets";
import Image from "next/image";
import React from "react";
import styles from "styles/styles";

const GetStarted: React.FC = () => (
  <div
    className={` ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={` ${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={` ${styles.flexStart} flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient mr-1">Get</span>
        </p>
        <Image
          src={arrowUp}
          alt="arrowUp"
          width={23}
          height={23}
          className="object-contain"
        />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
