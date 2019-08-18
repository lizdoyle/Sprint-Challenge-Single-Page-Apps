import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Characters = (props) => {

    const [character, setCharacter] = useState();
    console.log("CharProps:", props);


      useEffect(() => {
          const char = props.match.params.path;
          console.log(char);



          axios
            .get(`https://rickandmortyapi.com/api/character/${char}`)
            .then(res => {
              setCharacter(res.data)
              console.log(res.data)

            })
            .catch( err => {
              console.log("Error message from Characters", err);
            })



      }, []);

  if(!character) {return <div>Loading Characters...</div>}

  const {info, results} = character;
  console.log("info:", info)
console.log("results:", results)
    return(
        <div className="character-card">
            <img src={results.url}/>
            <h2>{results.name}</h2>




        </div>

    )

}

export default Characters
