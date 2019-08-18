import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LocationCard from "./LocationCard";


const LocationsList = () => {

const [locations, setLocations] = useState();


  useEffect(() => {



      axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(res => {
          setLocations(res.data.results)
          console.log("Location API:", res.data)


        })
        .catch( err => {
          console.log("Error message from Locations", err);
        })



  }, [])

  if(!locations) {return <div>Loading Locations...</div>}

    return(
        <section className="location-list grid-view">
          {locations.map(loc => {
            return <LocationCard key={loc.id} {...loc} />
          })}
        </section>

    )

  }
export default  LocationsList
