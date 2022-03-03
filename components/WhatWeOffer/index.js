import React from "react";
import styles from "./styles.module.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
function WhatWeOffer() {
  return (
    <div className={styles.container} id="product">
      <Marquee speed={100} pauseOnHover={true} gradient={false}>
        <p className={styles.specialText}>
          We don&apos;t bleed blue.
          <span className={"stroke"} style={{ color: "var(--red)" }}>
            We don&apos;t bleed blue.
          </span>
          We don&apos;t bleed blue. We don&apos;t bleed blue.
          <span className={"stroke"} style={{ color: "var(--red)" }}>
            We don&apos;t bleed blue.
          </span>
        </p>
      </Marquee>
      <div className={styles.wrapper}>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          What We Offer
        </motion.h1>
        <p>We offer a range of anion chip disposable sanitary pads.</p>
      </div>
    </div>
  );
}

export default WhatWeOffer;
