import React from "react";
import "./SessionsTable.css";

import Session from "./Session";

function SessionsTable({ raceInfo }) {
  function formatSessionDateTime(sessionDate, sessionTime) {
    const dateAndTime = new Date(`${sessionDate}T${sessionTime}`);
    const date = dateAndTime.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      weekday: "short",
    });

    const time = dateAndTime.toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const estimatedEndTime = new Date(
      dateAndTime.getTime() + 1000 * 60 * 60
    ).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { date, time, estimatedEndTime };
  }

  return (
    <div className="session-times">
      <Session
        session="Practice 1"
        dateAndTime={formatSessionDateTime(
          raceInfo.FirstPractice.date,
          raceInfo.FirstPractice.time
        )}
        order={"flex-order-1"}
      />

      <Session
        session="Qualifying"
        dateAndTime={formatSessionDateTime(
          raceInfo.Qualifying.date,
          raceInfo.Qualifying.time
        )}
        order={raceInfo.Sprint ? "flex-order-2" : "flex-order-4"}
      />

      <Session
        session="Practice 2"
        dateAndTime={formatSessionDateTime(
          raceInfo.SecondPractice.date,
          raceInfo.SecondPractice.time
        )}
        order={raceInfo.Sprint ? "flex-order-3 border-b" : "flex-order-2"}
      />

      {raceInfo.ThirdPractice && (
        <Session
          session="Practice 3"
          dateAndTime={formatSessionDateTime(
            raceInfo.ThirdPractice.date,
            raceInfo.ThirdPractice.time
          )}
          order={"flex-order-3 border-b"}
        />
      )}

      {raceInfo.Sprint && (
        <Session
          session="Sprint"
          dateAndTime={formatSessionDateTime(
            raceInfo.Sprint.date,
            raceInfo.Sprint.time
          )}
          order={"flex-order-4"}
        />
      )}

      <Session
        session="Race"
        dateAndTime={formatSessionDateTime(raceInfo.date, raceInfo.time)}
        order={"flex-order-5"}
      />
    </div>
  );
}
export default SessionsTable;
