import React from "react";
import styles from "./AppBody.module.css";
import PythonData from "../../data/semester_2/PythonProgramming";
import Questions from "./Questions";

function AppBody() {
  const weekData = PythonData[0];

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
