import React, { useState, useEffect, useLocalStorage} from "react";
import axios from "axios";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  });
  const handleInputChange = event => {
    setQuery({ ...query, name: event.target.value });
  };

  useEffect(

    axios.get(`https://rickandmortyapi.com/api/character/?name=rick&status=alive`)
      .then(res => {
        console.log(res.data.results)
        setQuery(res.data.results)
      })
      .catch(err => {
        console.log(err)
      })

  , [])

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
