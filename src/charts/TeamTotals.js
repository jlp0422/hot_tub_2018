import React from 'react';
import { Chart } from 'react-google-charts';

const options = {
  chart: { title: 'Total Selections Per Team' },
  series: {
    0: { axis: 'selections' }, // Bind series 0 to an axis named 'distance'.
    1: { axis: 'team' } // Bind series 1 to an axis named 'brightness'.
  },
  axes: {
    x: {
      team: { label: 'Team Abbreviation' },
    },
    y: {
      selections: { label: 'Number of Selections' }
    }
  },
  // colors: ['red'],
  legend: { position: 'none' },
}

const TeamTotalsBarChart = ({ entries, colors }) => {
  const allSelections = entries.reduce((memo, entry) => memo.concat(entry.selections), [])
  const allSelectionsMap = allSelections.reduce((memo, team) => {
    if (!memo[team]) memo[team] = 1
    else memo[team]++
    return memo
  }, {})
  const teamData = Object.keys(allSelectionsMap).sort().reduce((memo, team) => {
    memo.push([team, allSelectionsMap[team], `color: ${colors[team]}`])
    return memo
  }, [])
  const chartData = ["Team Abbreviation", "Selections", { role: "style" }]
  const finalData = [chartData].concat(teamData)
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={finalData}
      loader={<h4>Loading chart...</h4>}
      options={options}
    />
  )
}

export default TeamTotalsBarChart;
