import React from "react";

import "./Session.css";

function Session({ session, dateAndTime, order }) {
  return (
    <div className={`session ${order}`}>
      <div className="session-name">{session}</div>
      <div className="session-date">{dateAndTime.date}</div>
      <div className="session-time">
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
  );
}

export default Session;
