export const formatDate = date => {
  const raceDay = new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });
  return raceDay;
};

export const findNextRace = races => {
  const now = new Date().getTime();

  return races.find(
    race => new Date(`${race.date}T${race.time}`).getTime() > now
  );
};

export const formatSessionDateTime = (
  sessionDate,
  sessionTime,
  isSprintRace = false,
  durationInMins = 60
) => {
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

  const endTime = new Date(
    dateAndTime.getTime() + 1000 * 60 * durationInMins
  ).toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isSprintRace) {
    const sprintShootoutTime = new Date(
      dateAndTime.getTime() - 1000 * 60 * 60
    ).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const sprintShootoutEndTime = new Date(
      dateAndTime.getTime() - 1000 * 60 * 15
    ).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      date,
      time,
      endTime,
      sprintShootoutTime,
      sprintShootoutEndTime,
    };
  }

  return { date, time, endTime };
};
