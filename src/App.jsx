import React, { useState, useEffect } from "react";

import Race from "./components/race-components/Race";

import {
  fetchRaceData,
  fetchDriverStandings,
  fetchConstructorStandings,
  fetchLastRaceResults,
} from "./api";

function App() {
  const [races, setRaces] = useState(null);
  const [driverStandings, setDriverStandings] = useState(null);
  const [constructorStandings, setConstructorStandings] = useState(null);
  const [lastRaceResults, setLastRaceResults] = useState(null);

  useEffect(() => {
    const getRaces = async () => {
      const racesData = await fetchRaceData();
      setRaces(racesData);
    };

    const getDriverStandings = async () => {
      const driverStandingsData = await fetchDriverStandings();
      setDriverStandings(driverStandingsData);
    };

    const getConstructorStandings = async () => {
      const constructorStandingsData = await fetchConstructorStandings();
      setConstructorStandings(constructorStandingsData);
    };

    const getLastRaceResults = async () => {
      const lastRaceResultsData = await fetchLastRaceResults();
      setLastRaceResults(lastRaceResultsData);
    };

    getDriverStandings();
    getConstructorStandings();
    getLastRaceResults();
    getRaces();
  }, []);

  return (
    <div className="App">
      <Race
        races={races}
        driverStandings={driverStandings}
        constructorStandings={constructorStandings}
        lastRaceResults={lastRaceResults}
      />
    </div>
  );
}

export default App;
