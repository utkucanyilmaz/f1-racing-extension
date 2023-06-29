import React from "react";

function LastRaceInfo({ lastRaceResults }) {
  return (
    <div className="border border-f-gray rounded-xl p-2 mt-2">
      <div className="font-bold text-sm">
        {lastRaceResults.raceName}&nbsp;-&nbsp;Round&nbsp;
        {lastRaceResults.round}
      </div>
      <div className="text-f-light-gray">
        {lastRaceResults.Circuit.circuitName}&nbsp;-&nbsp;
        {lastRaceResults.Circuit.Location.country},&nbsp;
        {lastRaceResults.Circuit.Location.locality}
      </div>
    </div>
  );
}

export default LastRaceInfo;
