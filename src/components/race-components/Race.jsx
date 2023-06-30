import React, { useEffect, useState } from "react";

import RaceInfo from "./RaceInfo";
import RaceWeekend from "./RaceWeekend";
import Calendar from "../calendar-components/Calendar";
import StandingsTable from "../standing-components/StandingsTable";
import NavigationBar from "../NavigationBar";
import LastRaceResults from "../last-race-components/LastRaceResults";
import LoadingPlacholder from "./LoadingPlaceholder";

import { formatDate, findNextRace } from "../../helpers";

import "./Race.css";

function Race({
  races,
  driverStandings,
  constructorStandings,
  lastRaceResults,
}) {
  const [nextRace, setNextRace] = useState(null);
  const [flag, setFlag] = useState(null);
  const [activeTab, setActiveTab] = useState("race-weekend");
  const [isLoading, setIsLoading] = useState(true);

  async function getNextRaceData() {
    const raceInfo = findNextRace(races);

    const firstRaceDay = formatDate(raceInfo.FirstPractice.date);

    const lastRaceDay = formatDate(raceInfo.date);

    setNextRace({ raceInfo, firstRaceDay, lastRaceDay });
    try {
      const flagResponse =
        raceInfo.Circuit.Location.country === "Netherlands"
          ? await fetch(
              `https://restcountries.com/v3.1/name/${raceInfo.Circuit.Location.country}?fields=flags&fullText=true`
            )
          : await fetch(
              `https://restcountries.com/v3.1/name/${raceInfo.Circuit.Location.country}?fields=flags`
            );

      const [{ flags }] = await flagResponse.json();

      setFlag(flags);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    races && getNextRaceData();
  }, [races]);

  return (
    <div className="race">
      {!isLoading && (
        <div className="w-full flex flex-col">
          <RaceInfo nextRace={nextRace} flag={flag} />
          <NavigationBar activeTab={activeTab} setActiveTab={setActiveTab} />
          {activeTab === "race-weekend" && (
            <RaceWeekend
              date={nextRace.raceInfo.date}
              time={nextRace.raceInfo.time}
              raceInfo={nextRace.raceInfo}
            />
          )}
          {activeTab === "calendar" && <Calendar races={races} />}
          {activeTab === "standings" && (
            <StandingsTable
              driverStandings={driverStandings}
              constructorStandings={constructorStandings}
            />
          )}
          {activeTab === "last-race" && (
            <LastRaceResults lastRaceResults={lastRaceResults} />
          )}
        </div>
      )}
      {isLoading && <LoadingPlacholder />}
    </div>
  );
}

export default Race;
