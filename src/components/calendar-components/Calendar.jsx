import React, { useState } from "react";
import CalendarItem from "./CalendarItem";

import NavigationItem from "../NavigationItem";

import { findNextRace, formatDate } from "../../helpers";

function Calendar({ races }) {
  const nextRace = findNextRace(races);
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleClick = tab => {
    setActiveTab(tab);
  };

  const racesData =
    races &&
    races.filter(race => {
      if (activeTab === "upcoming") {
        return +race.round >= +nextRace.round;
      } else if (activeTab === "past") {
        return +race.round < +nextRace.round;
      }
    });

  return (
    <div className="race-calendar animate-fade-in">
      <div className="inline-flex items-center gap-x-4 text-xs mt-1">
        <NavigationItem
          isActive={activeTab === "upcoming"}
          onItemClick={() => handleClick("upcoming")}
        >
          Upcoming
        </NavigationItem>
        <NavigationItem
          isActive={activeTab === "past"}
          onItemClick={() => handleClick("past")}
        >
          Past
        </NavigationItem>
      </div>

      <div className="p-1 h-80 overflow-y-scroll">
        {races &&
          racesData.map(race => (
            <CalendarItem
              key={race.round}
              country={race.Circuit.Location.country}
              date={formatDate(race.date)}
              round={race.round}
              isNextRace={race.round === nextRace.round ? true : false}
              circuitName={race.Circuit.circuitName}
            />
          ))}
      </div>
    </div>
  );
}

export default Calendar;
