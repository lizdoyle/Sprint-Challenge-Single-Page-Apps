import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Episodes = () => {

  const [episodes, setEpisodes] = useState();

    const id = props.match.params.id;

    useEffect(() => {
        const id = props.match.params.id

        axios
          .get(`https://rickandmortyapi.com/api/episode/`)
          .then(res => {


          }
          .catch( err => {
            console.log("Error message from Episodes", err);
          })



    }, [])


          return(
              <div>

              </div>

          )

      }


export default Episodes
