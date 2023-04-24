import React from "react";
import "./CalendarItem.css";

function CalendarItem({ country, date, round, isNextRace }) {
  return (
    <div className={`calendar-item ${isNextRace && "next-race"}`}>
      <div className="calendar-item-round">{round}</div>
      <div className="calendar-item-date">{date}</div>
      <div className="calendar-item-country">{country}</div>
    </div>
  );
}

export default CalendarItem;
