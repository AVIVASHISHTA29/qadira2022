import React from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

function Footer2() {
  return (
    <div className={styles.wrapper}>
      <h1>Contact Information</h1>
      <h3>Mailing Address</h3>
      <p>123 Anywhere St. Any City, ST 12345</p>
      <h3>Email Address</h3>
      <p>team@qadira.in</p>
      <h3>Phone Number</h3>
      <p>+91 123456789</p>
    </div>
  );
}

export default Footer2;
