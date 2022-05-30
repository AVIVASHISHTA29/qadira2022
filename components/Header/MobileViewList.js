import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function MobileViewList() {
  return (
    <List className={styles.mobileView}>
      <img
        src={"/assets/images/logo.svg"}
        width="60%"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "3rem",
        }}
      />
      <Link passHref={true} href="/">
        <p
          className={styles.navLinks}
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          Home
        </p>
      </Link>
      <Link passHref={true} href="/#aboutus">
        <p
          className={styles.navLinks}
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          {" "}
          About{" "}
        </p>
      </Link>
      <Link passHref={true} href="/#product">
        <p
          className={styles.navLinks}
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          {" "}
          Product{" "}
        </p>
      </Link>

      <Link passHref={true} href="/#testimonials">
        <p
          className={styles.navLinks}
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          {" "}
          Testimonials{" "}
        </p>
      </Link>
      <Link passHref={true} href="https://projectqadira.in">
        <p
          className={styles.navLinks}
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
          }}
        >
          {" "}
          Project{" "}
        </p>
      </Link>
    </List>
  );
}

export default MobileViewList;
