import React from "react";

function DriverStandings({ driverStandings }) {
  return (
    <div className="animate-fade-in">
      {driverStandings &&
        driverStandings.map(driver => (
          <div key={driver.position} className="standings-table-item">
            <div className="standing-info">
              <div className="standing-pos">{driver.position}</div>

              <div className="standing">
                <div className="standing-name">
                  {driver.Driver.givenName}&nbsp;{driver.Driver.familyName}
                </div>
                <div className="constructor-name">
                  {driver.Constructors[0].name}
                </div>
              </div>
            </div>

            <div className="standing-points">
              {driver.points} <span className="points">PTS</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default DriverStandings;
