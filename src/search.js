/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Search() {
  const [data, setData] = useState();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/positions.json?description=javascript");

      setData(result.data);
    };
    fetchData();
  }, []);

  let itemsToRender;

  if (data) {
    // eslint-disable-next-line no-unused-vars
    itemsToRender = data.map((data) => {
      return (
        <div key={data.id}>
          <h1>{data.company}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.description }} />;
        </div>
      );
    });
  }

  return <div>{itemsToRender}</div>;
}
