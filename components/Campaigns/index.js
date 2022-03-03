import React from "react";
import styles from "./styles.module.css";
import CampaignComponent from "../CampaignComponent";
function Campaigns() {
  return (
    <div className={styles.wrapper}>
      <h1>Campaigns</h1>
      <div className={styles.campaignFlex}>
        <CampaignComponent />
        <CampaignComponent />
        <CampaignComponent />
      </div>
    </div>
  );
}

export default Campaigns;
