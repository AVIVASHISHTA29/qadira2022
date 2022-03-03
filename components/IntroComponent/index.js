import { motion } from "framer-motion";
import React from "react";
import styles from "./styles.module.css";

function IntroComponent() {
  return (
    <div className={styles.wrapper}>
      <motion.p
        className={styles.upperText}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Yes, it&apos;s that time of the month. Yes, it&apos;s painful.Yes, its
        mood swings. Yes, it&apos;s bloody.
        <motion.p
          className={styles.middleText}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 1.5, ease: "easeInOut" }}
        >
          Bleed
          <br />
          with
          <br />
          pride.
        </motion.p>
        But No more shame. No more hiding. No more hushing our voices. No more
        stain checks. No more blushing. No more rain checks. No more pretending.
        No more excuses. No more embarrassment.{" "}
        <motion.span
          style={{ color: "var(--red)" }}
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.7, ease: "easeInOut" }}
        >
          Period for real
        </motion.span>
      </motion.p>

      <p className={styles.lowerText}></p>
    </div>
  );
}

export default IntroComponent;
