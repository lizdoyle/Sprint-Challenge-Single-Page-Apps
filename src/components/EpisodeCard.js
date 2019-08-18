import React from 'react'
import styled from 'styled-components';

const EpiCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid black;
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
`;

export default function EpisodeCard ( {episode} ) {
  return (
    <EpiCard className="episode-card">
      <h3 style={{textAlign: "center"}}>{episode.name}</h3>
      <p style={{margin: "0"}}>Episode {episode.episode}</p>
      <p style={{margin: "0"}}>Air Date: {episode.air_date}</p>
    </EpiCard>
  );
}
