import React from "react";
import CalendarItem from "./CalendarItem";
import "./Calendar.css";

import flagIcon from "/icons/racing-flag.png";

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
      };
    });

  return (
    <div className="race-calendar">
      <div className="calendar-header title-bg">
        <div className="calendar-header-title">{`${
          races && races[0].season
        } RACE CALENDAR`}</div>
        <div className="calendar-header-icon">
          <img src={flagIcon} alt="" />
        </div>
      </div>
      <div className="calendar">
        {races &&
          racesData.map(race => (
            <CalendarItem
              key={race.round}
              country={race.country}
              date={race.date}
              round={race.round}
              isNextRace={race.isNextRace}
            />
          ))}
      </div>
    </div>
  );
}

export default Calendar;
