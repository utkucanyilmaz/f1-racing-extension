export const formatDate = date => {
  const raceDay = new Date(date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
  });
  return raceDay;
};

export const findNextRace = races => {
  const now = new Date().getTime();
  return races.find(race => new Date(race.date).getTime() > now);
};
