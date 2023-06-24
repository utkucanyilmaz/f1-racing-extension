import React from "react";
import CalendarItem from "./CalendarItem";
import "./Calendar.css";

import { findNextRace, formatDate } from "../../helpers";

function Calendar({ races }) {
  const racesData =
    races &&
    races.map(race => {
      const nextRace = findNextRace(races);

      return {
        country: race.Circuit.Location.country,
        date: formatDate(race.date),
        round: race.round,
        isNextRace: race.round === nextRace.round ? true : false,
        circuitName: race.Circuit.circuitName,
      };
    });

  return (
    <div className="race-calendar">
      <div className="calendar">
        {races &&
          racesData.map(race => (
            <CalendarItem
              key={race.round}
              country={race.country}
              date={race.date}
              round={race.round}
              isNextRace={race.isNextRace}
              circuitName={race.circuitName}
            />
          ))}
      </div>
    </div>
  );
}

export default Calendar;
