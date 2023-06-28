import { useState } from "react";
import NavigationItem from "../NavigationItem";
import "./StandingsTable.css";

import DriverStandings from "./DriverStandings";
import ConstructorStandings from "./ConstructorStandings";

function StandingsTable({ driverStandings, constructorStandings }) {
  const [activeTab, setActiveTab] = useState("driver");

  const handleClick = tab => {
    setActiveTab(tab);
  };
  return (
    <div className="standings">
      <div className="inline-flex items-center gap-x-4 text-xs mt-1">
        <NavigationItem
          isActive={activeTab === "driver"}
          onItemClick={() => handleClick("driver")}
        >
          Driver
        </NavigationItem>
        <NavigationItem
          isActive={activeTab === "constructor"}
          onItemClick={() => handleClick("constructor")}
        >
          Constructor
        </NavigationItem>
      </div>

      <div className="standings-table">
        {activeTab === "driver" && (
          <DriverStandings driverStandings={driverStandings} />
        )}
        {activeTab === "constructor" && (
          <ConstructorStandings constructorStandings={constructorStandings} />
        )}
      </div>
    </div>
  );
}

export default StandingsTable;
