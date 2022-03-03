import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import Footer2 from "../Footer2";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}></div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}

export default Footer;
