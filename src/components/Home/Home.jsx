import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</h1>
          <h2>LMS WEEKLY MCQ ANSWERS</h2>
          <p>
            This website is a collection of all the answers to the weekly MCQs
            that are given in the LMS.
          </p>
          <p>
            This website is made by <a href="https://instagram.com/">Shubham Choudhury</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
