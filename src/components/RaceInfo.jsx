import React from "react";
import "./RaceInfo.css";

function RaceInfo({ upcomingRace, flag }) {
  return (
    <div className="race-info">
      <div className="race-country-image">
        <img
          src={flag.svg}
          alt={`${upcomingRace.raceInfo.Circuit.Location.country} flag`}
        />
      </div>
      <div>
        <div className="race-info-year">{upcomingRace.raceInfo.season}</div>
        <div className="race-info-title">{upcomingRace.raceInfo.raceName}</div>
        <div className="race-info-date">
          {`${upcomingRace.firstRaceDay} - ${upcomingRace.lastRaceDay}`}
        </div>
      </div>
    </div>
  );
}

export default RaceInfo;
