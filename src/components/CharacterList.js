import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);


  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(res => {
          setCharacters(res.data.results);
          console.log("Character Page info:", res.data.results)

        })
        .catch( err => {
          console.log("Error message from Characters", err);
        });

    }, []);


    if(!characters) {return <div>Loading Characters...</div>}


  return (
    <section className="character-list grid-view">
      {characters.map( char => {
        return <CharacterCard key={char.id} {...char} />
    })}
    </section>
  );
}

export default CharacterList
