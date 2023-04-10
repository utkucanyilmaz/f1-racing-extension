import React from "react";
import "./SessionsTable.css";

import Session from "./Session";

function SessionsTable({ raceInfo }) {
  function formatSessionDateTime(sessionDate, sessionTime, returnValue) {
    const dateAndTime = new Date(`${sessionDate}T${sessionTime}`);

    if (returnValue === "date") {
      return dateAndTime.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        weekday: "short",
      });
    } else if (returnValue === "time") {
      return dateAndTime.toLocaleString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  }

  return (
    <div className="session-times">
      <Session
        session="Practice 1"
        date={formatSessionDateTime(
          raceInfo.FirstPractice.date,
          raceInfo.FirstPractice.time,
          "date"
        )}
        time={formatSessionDateTime(
          raceInfo.FirstPractice.date,
          raceInfo.FirstPractice.time,
          "time"
        )}
        order={"flex-order-1"}
      />

      <Session
        session="Qualifying"
        date={formatSessionDateTime(
          raceInfo.Qualifying.date,
          raceInfo.Qualifying.time,
          "date"
        )}
        time={formatSessionDateTime(
          raceInfo.Qualifying.date,
          raceInfo.Qualifying.time,
          "time"
        )}
        order={raceInfo.Sprint ? "flex-order-2" : "flex-order-4"}
      />

      <Session
        session="Practice 2"
        date={formatSessionDateTime(
          raceInfo.SecondPractice.date,
          raceInfo.SecondPractice.time,
          "date"
        )}
        time={formatSessionDateTime(
          raceInfo.SecondPractice.date,
          raceInfo.SecondPractice.time,
          "time"
        )}
        order={raceInfo.Sprint ? "flex-order-3 border-b" : "flex-order-2"}
      />

      {raceInfo.ThirdPractice && (
        <Session
          session="Practice 3"
          date={formatSessionDateTime(
            raceInfo.ThirdPractice.date,
            raceInfo.ThirdPractice.time,
            "date"
          )}
          time={formatSessionDateTime(
            raceInfo.ThirdPractice.date,
            raceInfo.ThirdPractice.time,
            "time"
          )}
          order={"flex-order-3 border-b"}
        />
      )}

      {raceInfo.Sprint && (
        <Session
          session="Sprint"
          date={formatSessionDateTime(
            raceInfo.Sprint.date,
            raceInfo.Sprint.time,
            "date"
          )}
          time={formatSessionDateTime(
            raceInfo.Sprint.date,
            raceInfo.Sprint.time,
            "time"
          )}
          order={"flex-order-4"}
        />
      )}

      <Session
        session="Race"
        date={formatSessionDateTime(raceInfo.date, raceInfo.time, "date")}
        time={formatSessionDateTime(raceInfo.date, raceInfo.time, "time")}
        order={"flex-order-5"}
      />
    </div>
  );
}

export default SessionsTable;
