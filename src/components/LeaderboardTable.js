import React from 'react';
import { Table } from 'react-bootstrap';
import get from 'lodash/get';

const getOpenData = (data, whitelistedAthletes) => {
  const sanitizeWhitelist = whitelistedAthletes.map(i => i.toLowerCase());
  const competition = get(data, 'competition', {});
  let leaderboardRows = get(data, 'leaderboardRows', []);
  if (whitelistedAthletes.length > 0) {
    leaderboardRows = leaderboardRows.filter(row =>
      sanitizeWhitelist.includes(
        get(row, 'entrant.competitorName').toLowerCase()
      )
    );
  }

  const allRanks = leaderboardRows.map(row => get(row, 'overallRank'));

  return {
    competition,
    workouts: get(data, 'ordinals', []),
    athletes: leaderboardRows.map(row => ({
      name: get(row, 'entrant.competitorName'),
      overallRank: allRanks.indexOf(get(row, 'overallRank')) + 1,
      scores: get(row, 'scores', []),
    })),
  };
};

const generateWorkoutTitles = ({ competitionType, year, workouts }) => {
  if ((competitionType = 'open'))
    return workouts.map(workout => `${year.slice(-2)}.${workout.columnName}`);
  return workouts.map(workout => `Workout - ${workout.columnName}`);
};

const getAthleteScore = (athlete, workoutIndex) => {
  const scores = get(athlete, 'scores');
  if (workoutIndex < scores.length)
    return get(scores, [workoutIndex, 'scoreDisplay']) || '0';
  return '-';
};

const LeaderboardTable = ({ data = {}, whitelistedAthletes = [] }) => {
  const {
    athletes,
    workouts,
    competition: { competitionType, year },
  } = getOpenData(data, whitelistedAthletes);
  const workoutTitles = generateWorkoutTitles({
    competitionType,
    year,
    workouts,
  });
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          {workoutTitles.map((title, index) => <th key={index}>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {athletes.map((athlete, index) => (
          <tr key={index}>
            <td>{athlete.overallRank}</td>
            <td>{athlete.name}</td>
            {workoutTitles.map((_, index) => (
              <td key={`${workoutTitles} ${index}`}>
                {getAthleteScore(athlete, index)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default LeaderboardTable;
