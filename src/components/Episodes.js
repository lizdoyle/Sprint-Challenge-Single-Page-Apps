import React, {useState, useEffect} from 'react';

import axios from 'axios';

const Episodes = (props) => {

  const [episode, setEpisode] = useState([]);
  console.log("epiProps:", props)

    useEffect(() => {
        const epi = props.match.params.url;

        axios
          .get(`https://rickandmortyapi.com/api/episode/${epi}`)
          .then(res => {
            setEpisode(res.data)
            console.log(res.data)


          })
          .catch( err => {
            console.log("Error message from Episodes", err);
          })



    }, []);

    if(!episode) {return <div>Loading Episodes...</div>}

      return(
          <div>

          </div>

      )

      };


export default Episodes
