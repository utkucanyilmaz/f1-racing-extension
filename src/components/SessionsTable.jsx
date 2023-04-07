import React from "react";
import "./SessionsTable.css";

import Session from "./Session";

function SessionsTable() {
  return (
    <div className="session-times">
      <Session />
      <Session />
      <Session />
      <Session />
      <Session />
    </div>
  );
}

export default SessionsTable;
