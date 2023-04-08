import React, { useEffect, useState } from "react";
import SessionsTable from "./SessionsTable";
import Countdown from "./Countdown";
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

      const flagResponse = await fetch(
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
          <div className="race-info">
            <div className="race-country-image">
              <img
                src={flag.svg}
                alt={`${upcomingRace.raceInfo.Circuit.Location.country} flag`}
              />
            </div>
            <div>
              <div className="race-info-year">
                {upcomingRace.raceInfo.season}
              </div>
              <div className="race-info-title">
                {upcomingRace.raceInfo.raceName}
              </div>
              <div className="race-info-date">
                {`${upcomingRace.firstRaceDay} - ${upcomingRace.lastRaceDay}`}
              </div>
            </div>
          </div>
          <Countdown
            date={upcomingRace.raceInfo.date}
            time={upcomingRace.raceInfo.time}
          />
          <SessionsTable />
          <div className="times-displayed">
            Times displayed are your local times.
          </div>
        </>
      )}
    </div>
  );
}

export default Race;
