import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeList, setEpisodeList] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/")
    .then(res => {
      console.log('episodes: ', res.data.results);
      setEpisodeList(res.data.results);
    })
    .catch(err => {
      console.log(err);
    })
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return(
    <section className='episode-list grid-view'>
      {
        episodeList.map((episode, index) => {
          return <EpisodeCard episode={episode} key={index}/>
        })
      }
    </section>
  );
}
