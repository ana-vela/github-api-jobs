
import React, {useState} from 'react';

export default function Search() {

    const [query, setQuery] = useState("");
    const [jobs, updateJobs] = useState([]);
  
    const searchJobs = async (e) => {
      e.preventDefault();
      let url = `/positions.json?description=${query}`;
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          console.log(res.hits);
          updateJobs(res.hits);          
        })
        .catch((err) => {
          console.log("error", err);
        });
    };
  
    return (
        <div>
        <form className="form" onSubmit={searchJobs}>
        <label className="label" htmlFor="query"></label>
        <input 
        className="input"
        type="text"
        name="query"
        placeholder="search for jobs"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
  <button className="button" type="submit">
  Search
  </button>
        </form>
        <div>
        {jobs.map((job, i) => {
          return (
            <h2 key={i}>
            {job.description}

            </h2>
          )
        }

          
          )}
        </div>
        </div>
 

    )
}


