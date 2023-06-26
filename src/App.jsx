import React, { useState, useEffect } from "react";

import Race from "./components/race-components/Race";

import { fetchRaceData, fetchDriverStandings } from "./api";

function App() {
  const [races, setRaces] = useState(null);
  const [driverStandings, setDriverStandings] = useState(null);

  useEffect(() => {
    const getRaces = async () => {
      const racesData = await fetchRaceData();
      setRaces(racesData);
    };

    const getDriverStandings = async () => {
      const driverStandingsData = await fetchDriverStandings();
      setDriverStandings(driverStandingsData);
    };

    getRaces();
    getDriverStandings();
  }, []);

  return (
    <div className="App">
      <Race races={races} driverStandings={driverStandings} />
    </div>
  );
}

export default App;
