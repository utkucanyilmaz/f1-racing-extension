export const fetchRaceData = async () => {
  try {
    const raceDataResponse = await fetch(
      "https://ergast.com/api/f1/current.json"
    );
    const {
      MRData: {
        RaceTable: { Races },
      },
    } = await raceDataResponse.json();
    return Races;
  } catch (error) {
    console.log(error);
  }
};
