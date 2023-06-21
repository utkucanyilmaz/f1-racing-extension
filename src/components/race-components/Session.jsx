import React from "react";
import "./Session.css";

function Session({ session, dateAndTime, order }) {
  return (
    <div className={`session ${order}`}>
      <div className="session-date">
        <div className="day">{dateAndTime.day}</div>
        <div className="month">{dateAndTime.month}</div>
      </div>
      <div className="session-info">
        <div className="session-name">{session}</div>
        <div className="session-time">
          {dateAndTime.weekday},
          {session === "Sprint Shootout"
            ? dateAndTime.sprintShootoutTime
            : dateAndTime.time}
          {session === "Sprint Shootout"
            ? ` - ${dateAndTime.sprintShootoutEndTime}`
            : session !== "Race"
            ? ` - ${dateAndTime.endTime}`
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Session;
