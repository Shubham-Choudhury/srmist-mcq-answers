import React from "react";
import styles from "./AppBody.module.css";
import Options from "./Options";

function Questions(props) {
  return (
    <>
      <li className={styles.question}>
        <p className={styles.single_question}>
          <span className={styles.question_no}>{props.index + 1}.</span> {props.question.question}
        </p>
        <Options options={props.question.options}/>
        <p className={styles.answer}>
          <span className={styles.option_no}>Ans:</span>{props.question.answer}
        </p>
      </li>
    </>
  );
}

export default Questions;
