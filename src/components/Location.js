import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Locations = (props) => {

const [location, setLocation] = useState();

console.log("locProps:", props)
  useEffect(() => {
      const loc = props.match.params.url

      axios
        .get(`https://rickandmortyapi.com/api/location/${loc}`)
        .then(res => {
          setLocation(res.data)

        })
        .catch( err => {
          console.log("Error message from Locations", err);
        })



  }, [])

  if(!location) {return <div>Loading Locations...</div>}

    return(
        <div>

        </div>

    )

  }

export default Locations
