import React from "react";
import "./CalendarItem.css";

function CalendarItem({ country, date, round, isNextRace, circuitName }) {
  return (
    <div className={`calendar-item ${isNextRace && "next-race"}`}>
      <div className="calendar-item-round">{round}</div>
      <div>
        <div className="calendar-item-circuit-name">{circuitName}</div>
        <div className="calendar-item-country">
          {country} - <span className="calendar-item-date">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default CalendarItem;
