import React from "react";

import "./StandingsTable.css";
import trophyIcon from "/icons/trophy-solid.svg";

function StandingsTable({ driverStandings }) {
  return (
    <div className="standings-table">
      <div className="standings-table-title title-bg">Driver Standings</div>
      {driverStandings &&
        driverStandings.map(driver => (
          <div key={driver.position} className="standings-table-item">
            <div className="driver-info">
              <div className="driver-pos">{driver.position}</div>
              <span
                className={`${driver.Constructors[0].constructorId} team-color`}
              ></span>
              <div className="driver-fullname">
                <span className="driver-name">{driver.Driver.givenName} </span>
                <span className="driver-surname">
                  {driver.Driver.familyName}
                </span>
              </div>
              <div className="constructor-name">
                {driver.Constructors[0].name}
              </div>
            </div>
            <div className="ranking-info">
              <div className="driver-points">{driver.points} PTS</div>
              <div className="driver-wins">
                <img
                  className="wins-trophy-icon"
                  src={trophyIcon}
                  alt="trophy icon"
                />
                <span className="wins">{driver.wins}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default StandingsTable;
