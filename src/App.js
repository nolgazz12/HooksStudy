import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import useAxios from "./useAxios";
const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json"
  });
  // console.log(
  //   `loading:${loading},\n data:${JSON.stringify(data)}, \n error:${error}`
  // );
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h1>{loading ? "Loading" : "done"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;
