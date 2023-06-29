import React from "react";
import LastRaceInfo from "./LastRaceInfo";
import LastRaceTable from "./LastRaceTable";

function LastRaceResults({ lastRaceResults }) {
  return (
    <div className="animate-fade-in">
      <LastRaceInfo lastRaceResults={lastRaceResults} />
      <LastRaceTable results={lastRaceResults.Results} />
    </div>
  );
}

export default LastRaceResults;
