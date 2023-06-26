import React from "react";
import NavigationItem from "./NavigationItem";

function NavigationBar({ activeTab, setActiveTab }) {
  const handleItemClick = item => {
    setActiveTab(item);
  };

  return (
    <nav>
      <ul className="flex gap-x-4 pt-2 w-96">
        <NavigationItem
          isActive={activeTab === "race-weekend"}
          onItemClick={() => handleItemClick("race-weekend")}
        >
          Race Weekend
        </NavigationItem>
        <NavigationItem
          isActive={activeTab === "calendar"}
          onItemClick={() => handleItemClick("calendar")}
        >
          Calendar
        </NavigationItem>
        <NavigationItem
          isActive={activeTab === "standings"}
          onItemClick={() => handleItemClick("standings")}
        >
          Standings
        </NavigationItem>
      </ul>
    </nav>
  );
}

export default NavigationBar;
