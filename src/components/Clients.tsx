import { clients } from "../constants";
import React from "react";
import styles from "styles/styles";
import Image from "next/image";

const Clients: React.FC = () => (
  <section id="clients" className={`${styles.flexCenter} flex-wrap w-full my-4`}>
    {clients.map((client) => (
      <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px] m-5`}>
        <Image
          src={client.logo}
          alt="client_logo"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
    ))}
  </section>
);

export default Clients;
