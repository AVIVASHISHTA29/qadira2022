import React from "react";
import styles from "./styles.module.css";
import CampaignComponent from "../CampaignComponent";
import { motion } from "framer-motion";
function Campaigns() {
  return (
    <div className={styles.wrapper}>
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Campaigns
      </motion.h1>
      <motion.div
        className={styles.campaignFlex}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
      >
        <CampaignComponent />
        <CampaignComponent />
        <CampaignComponent />
      </motion.div>
    </div>
  );
}

export default Campaigns;
