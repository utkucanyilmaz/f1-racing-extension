import React, { useEffect, useState } from "react";

import Countdown from "./Countdown";
import RaceInfo from "./RaceInfo";
import SessionsTable from "./SessionsTable";
import LoadingPlaceholder from "./LoadingPlaceholder";

import "./Race.css";

function Race() {
  const [upcomingRace, setUpcomingRace] = useState(null);
  const [flag, setFlag] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getUpcomingRaceData() {
    const now = new Date().getTime();

    try {
      const raceDataResponse = await fetch(
        "https://ergast.com/api/f1/current.json"
      );
      const {
        MRData: {
          RaceTable: { Races },
        },
      } = await raceDataResponse.json();

      const raceInfo = await Races.find(
        race => new Date(race.date).getTime() > now
      );

      const flagResponse =
        raceInfo.Circuit.Location.country === "Netherlands"
          ? await fetch(
              `https://restcountries.com/v3.1/name/${raceInfo.Circuit.Location.country}?fields=flags&fullText=true`
            )
          : await fetch(
              `https://restcountries.com/v3.1/name/${raceInfo.Circuit.Location.country}?fields=flags`
            );

      const [{ flags }] = await flagResponse.json();

      const firstRaceDay = new Date(raceInfo.FirstPractice.date).toLocaleString(
        "en-GB",
        { day: "numeric", month: "short" }
      );

      const lastRaceDay = new Date(raceInfo.date).toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
      });

      setUpcomingRace({ raceInfo, firstRaceDay, lastRaceDay });
      setFlag(flags);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUpcomingRaceData();
  }, []);

  return (
    <div className="race">
      {!isLoading && (
        <>
          <div className="race-round">
            Round {upcomingRace.raceInfo.round} - Upcoming Race
          </div>
          <RaceInfo upcomingRace={upcomingRace} flag={flag} />
          <Countdown
            date={upcomingRace.raceInfo.date}
            time={upcomingRace.raceInfo.time}
          />
          <SessionsTable raceInfo={upcomingRace.raceInfo} />
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
