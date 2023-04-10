import React from "react";

import "./Session.css";

function Session({ session, date, time, order }) {
  return (
    <div className={`session ${order}`}>
      <div className="session-name">{session}</div>
      <div className="session-date">{date}</div>
      <div className="session-time">{time}</div>
    </div>
  );
}

export default Session;
