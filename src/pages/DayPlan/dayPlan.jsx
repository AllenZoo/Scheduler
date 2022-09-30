import React, { Component } from "react";
import _ from "lodash";
import TimeTable from "../../components/timetable/timeTable";
import "../../css/dayPlan.css";

class DayPlan extends Component {
  getDayPlan() {
    let day = new Date().toLocaleString("en-us", { weekday: "long" });
    if (this.props.schedule != null) {
      let schedule = _.cloneDeep(this.props.schedule);
      schedule = schedule.filter((date) => {
        return date.date === day;
      });

      return schedule;
    }
  }

  dayPlan = this.getDayPlan();

  render() {
    return (
      <div>
        <div className="day-plan-container">
          <div className="page-title">Day Plan</div>
          <TimeTable schedule={this.dayPlan}></TimeTable>
        </div>

        <div className="dayplan-page-background"></div>
      </div>
    );
  }
}

export default DayPlan;
