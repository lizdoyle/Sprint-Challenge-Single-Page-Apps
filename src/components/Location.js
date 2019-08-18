import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Locations = (props) => {

const [locations, setLocations] = useState();

  const id = props.match.params.id;

  useEffect(() => {
      const id = props.match.params.id

      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(res => {


        }
        .catch( err => {
          console.log("Error message from Locations", err);
        })



  }, [])

      return(
          <div>

          </div>

      )

  }

export default Locations
