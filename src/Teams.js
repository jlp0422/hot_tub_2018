import React from 'react';
import { Link } from 'react-router-dom';

const Teams = ({ teamCityName }) => {
  return (
    <div>
      <h2>NFL Teams</h2>
      <ul>
        {
          Object.keys(teamCityName).map(team => (
            <Link key={team} to={`/teams/${team}`}>
              <li>{teamCityName[team]}</li>
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Teams;