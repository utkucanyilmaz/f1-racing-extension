import React from "react";
import SessionsTable from "./SessionsTable";
import "./Race.css";

function Race() {
  return (
    <div className="race">
      <div className="race-round">Round 4 - Upcoming Race</div>
      <div className="race-info">
        <div className="race-country-image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
            alt="flag"
          />
        </div>
        <div>
          <div className="race-info-year">2023</div>
          <div className="race-info-title">Azerbaijan Grand Prix</div>
          <div className="race-info-date">
            28-30
            <span className="race-info-month">APR</span>
          </div>
        </div>
      </div>
      <div className="race-info-countdown">
        <span className="number">
          30 <span className="type">Days</span>
        </span>
        <span className="number">
          30 <span className="type">Hours</span>
        </span>
        <span className="number">
          30 <span className="type">Mins</span>
        </span>
        <span className="number">
          30 <span className="type">Seconds</span>
        </span>
      </div>
      <SessionsTable />
      <div className="times-displayed">
        Times displayed are your local times.
      </div>
    </div>
  );
}

export default Race;
