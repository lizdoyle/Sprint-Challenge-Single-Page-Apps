import React, {useState, useEffect} from 'react';
import {Card} from "semantic-ui-react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";


const EpisodesList = () => {

  const [episodes, setEpisodes] = useState([]);

    useEffect(() => {

        axios
          .get(`https://rickandmortyapi.com/api/episode/`)
          .then(res => {
            setEpisodes(res.data.results)
            console.log(res.data.results)


          })
          .catch( err => {
            console.log("Error message from Episodes", err);
          })

    }, []);

    if(!episodes) {return <div>Loading Episodes...</div>}

      return(
          <section className="episodes-list grid-view" >
            {episodes.map(epi => {
              return <EpisodeCard key={epi.id} {...epi} />
            })}

          </section>

      )

      };


export default EpisodesList
