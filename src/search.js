/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Search() {
  const [data, setData] = useState({hits: []});
  const [query, setQuery] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/positions.json?description=${query}`);

      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, [query]);

  let itemsToRender;

  if (data) {
    // eslint-disable-next-line no-unused-vars
    itemsToRender = Object.values(data).map((data, index) => {
      return (
        <div key={index}>
          <h1>{data.company}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />;
        </div>
      );
    });
  }

  return (
  
  <div>
  <input 
  type="text"
  value={query}
  onChange={event => setQuery(event.target.value)}
  />
  <button className="button" type="submit">
              Search
            </button>
  
  
  {itemsToRender}</div>
);
}
