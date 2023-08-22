import React from "react";
import styles from "./AppBody.module.css";

function Options(props) {
  // console.log(props.options)
  const options = props.options;
  const alphabet = 'abcdefghij'.split('');
  return (
    <>
      <ol className={styles.options}>
        {options.map((option, index) => (
          <li key={index}>
            <span className={styles.option_no}>({alphabet[index]})</span>{option}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Options;
