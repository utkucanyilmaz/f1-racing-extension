export const formatDate = date => {
  const raceDay = new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });
  return raceDay;
};

export const findRace = (races, action) => {
  const now = new Date().getTime();

  switch (action) {
    case "next":
      return races.find(
        race => new Date(`${race.date}T${race.time}`).getTime() > now
      );

    case "prev":
      return races.findLast(
        race => new Date(`${race.date}T${race.time}`).getTime() < now
      );
    default:
      console.error("Unknown action: " + action);
  }
};

export const formatSessionDateTime = (
  sessionDate,
  sessionTime,
  isSprintRace = false,
  durationInMins = 60
) => {
  const dateAndTime = new Date(`${sessionDate}T${sessionTime}`);

  const day = dateAndTime.toLocaleString("en-GB", { day: "numeric" });
  const month = dateAndTime.toLocaleString("en-GB", { month: "short" });
  const weekday = dateAndTime.toLocaleString("en-GB", { weekday: "short" });

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

  const commonDate = {
    day,
    month,
    weekday,
    time,
    endTime,
  };

  if (isSprintRace) {
    const sprintShootoutTime = new Date(
      dateAndTime.getTime() - 1000 * 30 * 60
    ).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const sprintShootoutEndTime = new Date(
      dateAndTime.getTime() + 1000 * 14 * 60
    ).toLocaleString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      ...commonDate,
      sprintShootoutTime,
      sprintShootoutEndTime,
    };
  }

  return { ...commonDate };
};

export const addLeadingZero = number => {
  return number < 10 ? (number = "0" + number) : number;
};
