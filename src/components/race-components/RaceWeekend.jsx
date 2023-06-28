import React from "react";
import Countdown from "./Countdown";
import SessionsTable from "./SessionsTable";

function RaceWeekend({ date, time, raceInfo }) {
  return (
    <div className="animate-fade-in">
      <Countdown date={date} time={time} />
      <SessionsTable raceInfo={raceInfo} />
      <div className="times-displayed">
        Times displayed are your local times.
      </div>
    </div>
  );
}

export default RaceWeekend;
