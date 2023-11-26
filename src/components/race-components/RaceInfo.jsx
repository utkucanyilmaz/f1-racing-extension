import React from "react";
import "./RaceInfo.css";
import SeasonOver from "./SeasonOver";

function RaceInfo({ nextRace, flag, races }) {
  return (
    <div className="race-info">
      <div className="race-info-wrapper">
        {nextRace !== "season-over" ? (
          <>
            <div className="race-year">{nextRace.raceInfo.season}</div>
            <div className="race-title">{nextRace.raceInfo.raceName}</div>
            <div className="race-round-date">
              <div className="race-round">Round {nextRace.raceInfo.round}</div>
              <div className="race-date">
                {`${nextRace.firstRaceDay} - ${nextRace.lastRaceDay}`}
              </div>
            </div>
            <div className="race-location">
              <div className="race-country-image">
                {flag && (
                  <img
                    src={flag.svg}
                    alt={`${nextRace.raceInfo.Circuit.Location.country} flag`}
                  />
                )}
              </div>
              <div className="race-country">
                {nextRace.raceInfo.Circuit.Location.country} -{" "}
                <span className="circuit-name">
                  {nextRace.raceInfo.Circuit.circuitName}
                </span>
              </div>
            </div>
          </>
        ) : (
          <SeasonOver races={races} />
        )}
      </div>
    </div>
  );
}

export default RaceInfo;
