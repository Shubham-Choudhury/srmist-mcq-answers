import React, { useState } from "react";
import styles from "./BodyNavigation.module.css";

function BodyNavigation(props) {
  const [subjectId, setSubjectId] = useState("");

  const selectSubjectHandler = (event) => {
    if (event.target.value === "NaN") {
      props.onSelectWeekHandler(false);
      props.onSelectSubjectHandler(false);
      
      setSubjectId("");
    } else {
      props.onSelectSubjectHandler(event.target.value);
      setSubjectId(event.target.value);
    }
  };

  const selectWeekHandler = (event) => {
    if (event.target.value === "NaN") {
      props.onSelectWeekHandler(false);
    } else {
      props.onSelectWeekHandler(event.target.value);
    }
  };

  let numberOfWeeks = 0;
  for (let i = 0; i < props.navigationData.length; i++) {
    if (props.navigationData[i].id === subjectId) {
      numberOfWeeks = props.navigationData[i].no_of_weeks;
      break;
    }
  }


  return (
    <>
      <div className={styles.body_navigation_container}>
        <div className={styles.custom_select}>
          <select
            className={styles.options}
            value={props.selectSubject}
            onChange={selectSubjectHandler}
          >
            <option value="NaN">Select Subject</option>
            {props.navigationData.map((data) => (
              <option key={data.id} value={data.id}>
                {data.subject}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.custom_select}>
          <select value={props.selectWeek} onChange={selectWeekHandler}>
            <option value="NaN">Select Week</option>
            {props.selectSubject ? (
              <>
                {Array(numberOfWeeks)
                  .fill()
                  .map((_, index) => (
                    <option key={index} value={index + 1}>
                      Week {index + 1}
                    </option>
                  ))}
              </>
            ) : (
              ""
            )}
          </select>
        </div>
      </div>
    </>
  );
}

export default BodyNavigation;
