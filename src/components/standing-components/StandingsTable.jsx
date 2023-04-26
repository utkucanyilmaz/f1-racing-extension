import React from "react";

import "./StandingsTable.css";
import trophyIcon from "/icons/trophy-solid.svg";

function StandingsTable({ driverStandings }) {
  console.log(driverStandings);
  return (
    <div className="standings-table">
      <div className="standings-table-title">Driver Standings</div>
      {driverStandings &&
        driverStandings.map(driver => (
          <a
            key={driver.position}
            href={driver.Driver.url}
            className={`${driver.Constructors[0].constructorId} standings-table-item`}
          >
            <div className="driver-info">
              <div className="driver-pos">{driver.position}</div>
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
          </a>
        ))}
    </div>
  );
}

export default StandingsTable;
