import React from "react";
import "./RaceInfo.css";

function RaceInfo({ upcomingRace, flag }) {
  console.log(upcomingRace);
  return (
    <div className="race-info">
      <div className="race-info-wrapper">
        <div className="race-round">
          Round {upcomingRace.raceInfo.round} - Upcoming Race
        </div>
        <div className="race-country-image">
          {flag ? (
            <img
              src={flag.svg}
              alt={`${upcomingRace.raceInfo.Circuit.Location.country} flag`}
            />
          ) : (
            <div className="race-country-image-placeholder"></div>
          )}
        </div>
        <div>
          <div className="race-info-year">{upcomingRace.raceInfo.season}</div>
          <div className="race-info-title">
            {upcomingRace.raceInfo.raceName}
          </div>
          <div className="race-info-date">
            {`${upcomingRace.firstRaceDay} - ${upcomingRace.lastRaceDay}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceInfo;
