import React, { Component } from "react";
import _ from "lodash";
import TimeTable from "../../components/timetable/timeTable";

class DayPlan extends Component {
  getDayPlan() {
    let day = new Date().toLocaleString("en-us", { weekday: "long" });
    // schedule: [
    //   {
    //     date: "Monday",
    //     plan: [],
    //   },
    //   {
    //     date: "Tuesday",
    //     plan: [],
    //   },
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
    return <TimeTable schedule={this.dayPlan}></TimeTable>;
  }
}

export default DayPlan;
