import { useEffect, useState } from "react";
import LastRaceInfo from "./LastRaceInfo";
import LastRaceTable from "./LastRaceTable";
import NavigationItem from "../NavigationItem";

import { fetchSprintRaceResults } from "../../api";
import { findPrevRace } from "../../helpers";

function LastRaceResults({ lastRaceResults, races }) {
  const [activeTab, setActiveTab] = useState("race");
  const [sprintResults, setSprintResults] = useState(null);
  const lastRace = findPrevRace(races, lastRaceResults.round);

  useEffect(() => {
    const getSprintResults = async round => {
      const result = await fetchSprintRaceResults(round);
      setSprintResults(result);
    };

    if (lastRace.Sprint) {
      getSprintResults(lastRaceResults.round);
    }
  }, []);

  return (
    <div className="animate-fade-in">
      <LastRaceInfo lastRaceResults={lastRaceResults} />
      {lastRace?.Sprint && (
        <div className="inline-flex items-center gap-x-4 text-xs mt-1">
          <NavigationItem
            isActive={activeTab === "race"}
            onItemClick={() => setActiveTab("race")}
          >
            Race
          </NavigationItem>
          <NavigationItem
            isActive={activeTab === "sprint"}
            onItemClick={() => setActiveTab("sprint")}
          >
            Sprint
          </NavigationItem>
        </div>
      )}

      {activeTab === "race" && (
        <div className="animate-fade-in">
          <LastRaceTable results={lastRaceResults.Results} />
        </div>
      )}

      {activeTab === "sprint" && lastRace?.Sprint && (
        <div className="animate-fade-in">
          <LastRaceTable results={sprintResults} />
        </div>
      )}
    </div>
  );
}

export default LastRaceResults;
