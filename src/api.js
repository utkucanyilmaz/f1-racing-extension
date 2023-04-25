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

export const fetchDriverStandings = async () => {
  try {
    const driverStandings = await fetch(
      "https://ergast.com/api/f1/current/driverStandings.json"
    );

    const {
      MRData: {
        StandingsTable: { StandingsLists },
      },
    } = await driverStandings.json();

    return StandingsLists[0].DriverStandings;
  } catch (error) {
    console.log(error);
  }
};
