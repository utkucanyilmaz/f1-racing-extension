import React from "react";
import "./RaceInfo.css";

function RaceInfo({ upcomingRace, flag }) {
  console.log(upcomingRace);
  return (
    <div className="race-info">
      <div className="race-info-wrapper">
        <div className="race-year">{upcomingRace.raceInfo.season}</div>
        <div className="race-title">{upcomingRace.raceInfo.raceName}</div>
        <div className="race-round-date">
          <div className="race-round">Round {upcomingRace.raceInfo.round}</div>
          <div className="race-date">
            {`${upcomingRace.firstRaceDay} - ${upcomingRace.lastRaceDay}`}
          </div>
        </div>
        <div className="race-location">
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
          <div className="race-country">
            {upcomingRace.raceInfo.Circuit.Location.country} -{" "}
            <span className="circuit-name">
              {upcomingRace.raceInfo.Circuit.circuitName}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaceInfo;
