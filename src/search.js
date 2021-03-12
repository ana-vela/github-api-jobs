
import React, {useState, useEffect} from 'react';

export default function Search() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`/positions.json`)
    .then((response) => response.json())
    .then(setData);
  }, []);
  
  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return (
    <div>
      no data available;
    </div>
  )
}
