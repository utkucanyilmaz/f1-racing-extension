import React from "react";

function ConstructorStandings({ constructorStandings }) {
  return (
    <div className="animate-fade-in">
      {constructorStandings &&
        constructorStandings.map(constructor => (
          <div key={constructor.position} className="standings-table-item">
            <div className="standing-info">
              <div className="standing-pos">{constructor.position}</div>
              <div className="standing">
                <div className="standing-name">
                  {constructor.Constructor.name}
                </div>
              </div>
            </div>

            <div className="standing-points">
              {constructor.points} <span className="points">PTS</span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ConstructorStandings;
