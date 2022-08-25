import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "components";
import type { NextPage } from "next";
import styles from "../styles/styles";

const Home: NextPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.padding} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={styles.flexStart}>
      <div className={styles.boxWidth}>
        <Hero />
      </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={styles.boxWidth}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer/>
      </div>
    </div>
  </div>
);

export default Home;
