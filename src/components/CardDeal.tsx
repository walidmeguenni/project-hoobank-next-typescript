import { card } from "assets";
import Image from "next/image";
import React from "react";
import styles, { layout } from "styles/styles";
import Button from "./Button";

const CardDeal: React.FC = () => (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="ss:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>
    <div className={layout.sectionImg}>
      <Image src={card} alt="card" className="w-full h-full" />
    </div>
  </section>
);

export default CardDeal;
