import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {

  const initialValue = 1;
  const [team, setTeam] = useState(initialValue);   

  useEffect(
    () => {
        const fetchMatches = async () => {
            const response = await fetch('http://localhost:8080/team/Deccan Chargers');
            const data = await response.json();
            setTeam(data);
            // console.log(data);
        };
        
        fetchMatches();
    }

  );

  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>    
      <MatchDetailCard/>
      <MatchSmallCard/>
      <MatchSmallCard/>
      <MatchSmallCard/>
    </div>
  );
}


