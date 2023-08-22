import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const menuClickHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // const navClickHandler = (nav)=>{

  // }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row_wrap}>
            <div className={styles.logo_wrap}>
              <span className={styles.logo}>
                {/* <a href="/">SRMIST</a> */}
                <Link
                  onClick={() => {
                    setActiveNav("");
                  }}
                  to="/"
                >
                  SRMIST
                </Link>
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
                <li
                  className={
                    activeNav === "first-semester" ? styles.active : ""
                  }
                >
                  <Link
                    onClick={() => {
                      setActiveNav("first-semester");
                    }}
                    to="/first-semester"
                  >
                    First Semester
                  </Link>
                </li>
                <li
                  className={
                    activeNav === "second-semester" ? styles.active : ""
                  }
                >
                  <Link
                    onClick={() => {
                      setActiveNav("second-semester");
                    }}
                    to="/second-semester"
                  >
                    Second Semester
                  </Link>
                </li>
                <li
                  className={
                    activeNav === "third-semester" ? styles.active : ""
                  }
                >
                  <Link
                    onClick={() => {
                      setActiveNav("third-semester");
                    }}
                    to="/third-semester"
                  >
                    Third Semester
                  </Link>
                </li>
                <li
                  className={
                    activeNav === "fourth-semester" ? styles.active : ""
                  }
                >
                  <Link
                    onClick={() => {
                      setActiveNav("fourth-semester");
                    }}
                    to="/fourth-semester"
                  >
                    Fourth Semester
                  </Link>
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
