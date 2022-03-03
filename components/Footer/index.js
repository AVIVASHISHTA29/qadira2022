import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer2 from "../Footer2";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
        className={styles.logo}
      ></motion.div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

export default Footer;
