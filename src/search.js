/* eslint-disable array-callback-return */
import axios from 'axios'
import React, { Component } from 'react';


const api = axios.create({
  baseURL: `/positions.json`
})
class Search extends Component {

state = {
  jobs: []
}

constructor() {
  super();
  api.get(`/`).then(res => {
    console.log(res.data)
    this.setState({jobs: res.data});
  })
}


render() {
  return (
<div>
{this.state.jobs.map(job => <h2 key={job.id}>{job.company}</h2>)}


</div>


  )
}
 
 
}




export default Search;