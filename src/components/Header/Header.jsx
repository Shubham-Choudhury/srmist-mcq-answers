import React, { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row_wrap}>
            <div className={styles.logo_wrap}>
              <span className={styles.logo}>
                <a href="/">SRMIST</a>
              </span>
            </div>
            <div
              className={
                isMenuOpen
                  ? `${styles.nav_wrap} ${styles.is_open}`
                  : `${styles.nav_wrap}`
              }
            >
              <ul className={styles.nav_list}>
                <li className={styles.active}>
                  <a href="/">First Semester</a>
                </li>
                <li>
                  <a href="/">Second Semester</a>
                </li>
                <li>
                  <a href="/">Third Semester</a>
                </li>
                <li>
                  <a href="/">Fourth Semester</a>
                </li>
              </ul>
            </div>
            <div
              onClick={menuClickHandler}
              className={
                isMenuOpen
                  ? `${styles.hamburger} ${styles.is_active}`
                  : `${styles.hamburger}`
              }
            >
              <span className={styles.line}></span>
              <span className={styles.line}></span>
              <span className={styles.line}></span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
