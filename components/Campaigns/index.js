import React from "react";
import styles from "./styles.module.css";
import CampaignComponent from "../CampaignComponent";
import { motion } from "framer-motion";
function Campaigns() {
  return (
    <div className={styles.wrapper} id="testimonials">
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        Testimonials
      </motion.h1>
      <motion.div
        className={styles.campaignFlex}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.7, ease: "easeInOut" }}
      >
        <CampaignComponent
          title={"Anushka Gupta"}
          desc={
            "I’ve also used it and I too found it comfortable and valuable. I have always been fascinated by the kind of pads Nua and Carmesi provide, however could not buy it due to budget issue, Qadira is giving the same quality and an additional care towards vaginal care (Anion Chip) but in a much budget friendly price, I would definitely be willing to switch to it."
          }
        />
        <CampaignComponent
          title={"Dia"}
          desc={
            "they’re amazing- and i’m not being modest or anything THEYRE ACTUALLY REALLY DUCKING GOOD if people try it once they’ll not buy anything else HOLY GEORGE"
          }
        />
        <CampaignComponent
          title={"Akshita"}
          desc={
            "The pads are very soft and comfortable to wear especially for longer durations during summers. They are of quite good size also. Glad I tried it!"
          }
        />
        <CampaignComponent
          title={"Testimonials"}
          desc={
            "It is rash free and helps protect the skin due to its light, broad back & non-scent characteristics. I recommend this to all women out there!"
          }
        />
      </motion.div>
    </div>
  );
}

export default Campaigns;
