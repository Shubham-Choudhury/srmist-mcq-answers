import React from "react";
import styles from "./AppBody.module.css";

import Questions from "./Questions";


function AppBody(props) {
  const weekData = props.data;
  const questions = weekData.questions;
  return (
    <>
      <main className={styles.container}>
        <ol className={styles.questions}>
          {questions.map((question, index) => (
            <Questions key={index} index={index} question={question} />
          ))}
        </ol>
      </main>
    </>
  );
}

export default AppBody;
