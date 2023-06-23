import React from "react";

import "./StandingsTable.css";

function StandingsTable({ driverStandings }) {
  return (
    <div className="standings-table">
      {driverStandings &&
        driverStandings.map(driver => (
          <div key={driver.position} className="standings-table-item">
            <div className="driver-info">
              <div className="driver-pos">{driver.position}</div>

              <div className="driver">
                <div className="driver-name">
                  {driver.Driver.givenName}&nbsp;{driver.Driver.familyName}
                </div>
                <div className="constructor-name">
                  {driver.Constructors[0].name}
                </div>
              </div>
            </div>

            <div className="driver-points">
              {driver.points} <span className="points">PTS</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default StandingsTable;
