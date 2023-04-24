import React, { useState, useEffect } from "react";
import Race from "./components/race-components/Race";
import Calendar from "./components/calendar-components/Calendar";
import { fetchRaceData } from "./api.js";

function App() {
  const [races, setRaces] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchRaceData();
      setRaces(data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Race races={races} />
      {/* <Calendar races={races} /> */}
    </div>
  );
}

export default App;
