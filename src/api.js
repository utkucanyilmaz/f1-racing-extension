const baseUrl = "https://ergast.com/api/f1";

export const fetchRaceData = async () => {
  try {
    const raceDataResponse = await fetch(`${baseUrl}/current.json`);
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
      `${baseUrl}/current/driverStandings.json`
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

export const fetchConstructorStandings = async () => {
  try {
    const constructorStandings = await fetch(
      `${baseUrl}/current/constructorStandings.json`
    );

    const {
      MRData: {
        StandingsTable: { StandingsLists },
      },
    } = await constructorStandings.json();
    return StandingsLists[0].ConstructorStandings;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLastRaceResults = async () => {
  try {
    const lastRaceResults = await fetch(`${baseUrl}/current/last/results.json`);

    const {
      MRData: {
        RaceTable: { Races },
      },
    } = await lastRaceResults.json();
    return Races[0];
  } catch (error) {
    console.log(error);
  }
};

export const fetchSprintRaceResults = async raceRound => {
  try {
    const sprintResults = await fetch(
      `${baseUrl}/current/${raceRound}/sprint.json`
    );

    const {
      MRData: {
        RaceTable: { Races },
      },
    } = await sprintResults.json();

    return Races[0].SprintResults;
  } catch (error) {
    console.log(error);
  }
};
