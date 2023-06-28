import React, { useState, useEffect } from "react";

import Race from "./components/race-components/Race";

import {
  fetchRaceData,
  fetchDriverStandings,
  fetchConstructorStandings,
} from "./api";

function App() {
  const [races, setRaces] = useState(null);
  const [driverStandings, setDriverStandings] = useState(null);
  const [constructorStandings, setConstructorStandings] = useState(null);

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

    getDriverStandings();
    getConstructorStandings();
    getRaces();
  }, []);

  return (
    <div className="App">
      <Race
        races={races}
        driverStandings={driverStandings}
        constructorStandings={constructorStandings}
      />
    </div>
  );
}

export default App;
