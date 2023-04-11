import React from "react";

import "./Session.css";

function Session({ session, dateAndTime, order }) {
  return (
    <div className={`session ${order}`}>
      <div className="session-name">{session}</div>
      <div className="session-date">{dateAndTime.date}</div>
      <div className="session-time">
        {dateAndTime.time}
        {session !== "Race" && ` - ${dateAndTime.estimatedEndTime}`}
      </div>
    </div>
  );
}

export default Session;
