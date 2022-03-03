import Link from "next/link";
import styles from "./styles.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import DrawerComponent from "./DrawerComponent";
import { useEffect, useState } from "react";
function Header() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (process.browser) {
      if (window.innerWidth < 1000) {
        setOpen(false);
      }
    }
  }, []);

  if (process.browser) {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1000) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  }

  return (
    <div className={styles.container}>
      {open && (
        <>
          <div className={styles.rightContainer}>
            <Link href="/">
              <p className={styles.navLinks}>Home</p>
            </Link>
            <Link href="/#aboutus">
              <p className={styles.navLinks}>About Us</p>
            </Link>
            <Link href="/#product">
              <p className={styles.navLinks}>Product</p>
            </Link>
            <Link href="/#campaigns">
              <p className={styles.navLinks}>Campaigns</p>
            </Link>
          </div>
          {/* <div className={styles.rightContainer}>
            <Link href="https://instagram.com/_drishti.makhijani">
              <InstagramIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/drishti-makhijani-3418661b4">
              <LinkedInIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
              />
            </Link>
            <Link href="mailto:drishtimakhijani01@gmail.com">
              <MailIcon
                className={styles.navLinks2}
                style={{ fontSize: "1.5rem" }}
              />
            </Link>
          </div> */}
        </>
      )}
      {!open && <DrawerComponent />}
    </div>
  );
}

export default Header;
