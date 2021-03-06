import React from 'react'
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';

const EntryTeamsTab = ({ entry, teamCityName, teamWinMap, divisionLeaders, width }) => {
  ReactGA.event({
    category: 'change tab',
    action: 'Entry Teams Tab'
  })
  const fourSpaces = <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
  return (
    <ul className="list-group">
      {
        entry.selections.sort().map(team => {
          const isDivisionLeader = divisionLeaders.find(leader => leader.teamAbbrev === team)
          return (
            <li className="list-group-item" key={team}>
              <h6 style={{ margin: '3px 0'}}>
                <Link className="link" to={`/teams/${team}`}>
                  <span className="font-weight-bold team-name">{width < 340 ? team : teamCityName[team]}</span>
                </Link>
                {fourSpaces}
                <span className={`badge badge-success badge-pill team-badge`}>
                  {`${teamWinMap[team]} ${teamWinMap[team] === 1 ? 'win' : 'wins'}`}
                </span>
                {fourSpaces}
                {isDivisionLeader && <span className='badge badge-warning badge-pill team-badge'>&nbsp;{ width < 450 ? 'DW' : 'Division Winner' }&nbsp;</span>}
              </h6>
            </li>
          )
        })
      }
    </ul>
  )
}

export default EntryTeamsTab;
