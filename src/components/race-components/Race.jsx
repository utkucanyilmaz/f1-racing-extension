import React, { useEffect, useState } from "react";

import Countdown from "./Countdown";
import RaceInfo from "./RaceInfo";
import SessionsTable from "./SessionsTable";
import LoadingPlaceholder from "./LoadingPlaceholder";

import { formatDate, findNextRace } from "../../helpers";

import "./Race.css";

function Race({ races }) {
  const [nextRace, setNextRace] = useState(null);
  const [flag, setFlag] = useState(null);
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
        <>
          <RaceInfo nextRace={nextRace} flag={flag} />

          <Countdown
            date={nextRace.raceInfo.date}
            time={nextRace.raceInfo.time}
          />
          <SessionsTable raceInfo={nextRace.raceInfo} />
          <div className="times-displayed">
            Times displayed are your local times.
          </div>
        </>
      )}
      {isLoading && <LoadingPlaceholder />}
    </div>
  );
}

export default Race;
