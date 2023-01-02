import React, { useContext } from "react";
import { useRef } from "react";

import TimeTable from "../../components/timetable/timeTable";
import "../../css/template.css";
import { AppContext } from "../App";

function Templates(props) {
  const times = props.times;

  const addToPlanTemplate = (plan) => {
    props.handleAddToPlan(plan);
  };

  return (
    <div>
      <div className="template-container">
        <div className="page-title">Template</div>
        <TimeTable schedule={props.template} interactable={true}></TimeTable>
      </div>
      <div id="content-body"></div>
    </div>
  );
}

export default Templates;
