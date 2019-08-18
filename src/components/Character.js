import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Characters = (props) => {
const [character, setCharacter] = useState();

useEffect(() => {
    const id = props.match.params.id
    console.log(id);



    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacter(res.data)

      }
      .catch( err => {
        console.log("Error message from Characters", err);
      })



}, [])


    return(
        <div>

        </div>

    )

}

export default Characters
