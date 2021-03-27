/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useState, useEffect } from "react";

function Search() {
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
        <div className="card" key={index}>
        {data.company_logo
          ? <img src={data.company_logo} alt="logo" style={{width: '100px'}} />
          : <p></p>
        }


        <h2 style={{color: '#413c69'}}>{data.title}</h2>
          <h2 style={{color: '#4a47a3', textAlign:'left'}}>{data.company}</h2>
 
          <p style={{fontWeight: 'bold', color: 'gray'}}>{data.location}</p>
          <p style={{fontWeight: 'bold'}}>{data.type}</p>
          <p>{data.created_at}</p>


        <div dangerouslySetInnerHTML={{ __html: data.how_to_apply }} />

          {/* <div dangerouslySetInnerHTML={{ __html: data.description }} /> */}
        </div>
      );
    });
  }

  return (
  
  <div>
  <form>
  <input 
  type="text"
  value={query}
  onChange={event => setQuery(event.target.value)}
  />
  <button className="button" type="submit">
              Search
            </button>
            </form>
  
  
  {itemsToRender}</div>
);
}


export default Search;
