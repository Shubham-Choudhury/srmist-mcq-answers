import React, { useState } from "react";
import AppBody from "../components/AppBody/AppBody";
import BodyNavigation from "../components/AppBody/BodyNavigation";

// DATA
import PythonProgrammingData from "../data/semester_2/PythonProgramming";
import ComputerNetworksData from "../data/semester_2/ComputerNetworks";
import OptimizationTechniqyesData from "../data/semester_2/OptimizationTechniqyes";
import CareerAdvancementTWO from "../data/semester_2/CareerAdvancementTWO";
import AndroidApplicationsDevelopmentData from "../data/semester_2/AndroidApplicationsDevelopment";

function SecondSemester() {
  const [selectSubject, setSelectSubject] = useState(false);
  const [selectWeek, setSelectWeek] = useState(false);

  const selectSubjectHandler = (data) => {
    // immediate change
    setSelectSubject(data);
  };

  const selectWeekHandler = (data) => {
    setSelectWeek(data);
  };

  const navigationData = [
    {
      id: "pythonprogramming",
      subject: "PYTHON PROGRAMMING",
      no_of_weeks: PythonProgrammingData.length,
      data: PythonProgrammingData,
    },
    {
      id: "computernetworks",
      subject: "COMPUTER NETWORKS",
      no_of_weeks: ComputerNetworksData.length,
      data: ComputerNetworksData,
    },
    {
      id: "optimizationtechniqyes",
      subject: "OPTIMIZATION TECHNIQUES",
      no_of_weeks: OptimizationTechniqyesData.length,
      data: OptimizationTechniqyesData,
    },
    {
      id: "careeradvancementtwo",
      subject: "CAREER ADVANCEMENT II",
      no_of_weeks: CareerAdvancementTWO.length,
      data: CareerAdvancementTWO,
    },
    {
      id: "androidapplicationsdevelopment",
      subject: "ANDROID APPLICATIONS DEVELOPMENT",
      no_of_weeks: AndroidApplicationsDevelopmentData.length,
      data: AndroidApplicationsDevelopmentData,
    },
  ];

  let data = {};
  let isListEmpty = false;
  for (let i = 0; i < navigationData.length; i++) {
    if (navigationData[i].id === selectSubject) {
      // if(selectWeek){
      //   
      // }
      // console.log(`selectWeek:${selectWeek}`)
      if(navigationData[i].data.length === 0){
        isListEmpty = true;
      }
      else{
        data = navigationData[i].data[selectWeek - 1];
      }
      break;
    }
  }


  return (
    <>
      <BodyNavigation
        selectSubject={selectSubject}
        selectWeek={selectWeek}
        onSelectSubjectHandler={selectSubjectHandler}
        onSelectWeekHandler={selectWeekHandler}
        navigationData={navigationData}
      />

      {(selectSubject && selectWeek && !isListEmpty) ? <AppBody data={data} /> : ""}
    </>
  );
}

export default SecondSemester;
