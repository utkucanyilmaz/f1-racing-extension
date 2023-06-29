import React from "react";

import stopWatch from "/icons/stopwatch-solid.svg";

function LastRaceTableItem({
  position,
  raceTime,
  points,
  team,
  driverFullName,
  fastestLap,
}) {
  return (
    <div
      className={`flex justify-between border rounded-xl mb-1 p-2 ${
        fastestLap.rank === "1" ? "border-purple-500" : "border-f-gray "
      }`}
    >
      <div className="flex">
        <div className="text-xl px-2">{position}</div>
        <div>
          <div className="flex gap-x-2">
            {driverFullName}
            {fastestLap.rank === "1" && (
              <span className="text-purple-500 flex items-center gap-x-1">
                <img className="w-3 h-3" src={stopWatch} alt="fastest lap" />
                {fastestLap.Time.time}
              </span>
            )}
          </div>
          <div className="text-f-light-gray">{team}</div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="text-xs">{raceTime}</div>
        <div className="text-base">
          {points} <span className="text-xs">PTS</span>
        </div>
      </div>
    </div>
  );
}

export default LastRaceTableItem;
