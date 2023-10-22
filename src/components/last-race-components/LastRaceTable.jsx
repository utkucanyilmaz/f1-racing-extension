import React from "react";
import LastRaceTableItem from "./LastRaceTableItem";

function LastRaceTable({ results }) {
  return (
    <div className="mt-2 max-h-80 overflow-y-scroll">
      {results &&
        results.map(item => (
          <LastRaceTableItem
            key={+item.number}
            position={item.position}
            points={item.points}
            team={item.Constructor.name}
            driverFullName={`${item.Driver.givenName} ${item.Driver.familyName}`}
            raceTime={item.Time ? item.Time.time : item.status}
            fastestLap={item.FastestLap && item.FastestLap}
          />
        ))}
    </div>
  );
}

export default LastRaceTable;
