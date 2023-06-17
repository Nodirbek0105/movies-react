import React from "react"
import { useState, useEffect } from 'react';
import axios from "axios"

axios.defaults.baseURL = "https://www.omdbapi.com/?"

const useFetch = (query, page , id=0 , boolean=false) => {
  if(!boolean){
    axios.defaults.params = {
      apikey: "f56bbb3a",
      s: query,
      page: page,
    }
    if(boolean){
      axios.defaults.params = {
        apikey: "f56bbb3a",
        i: id,
      }
    }

  }
  return{ data:axios.get()}
}

// export default function useFetch(query, page) {
//   useQuery({ queryKey: ["movies"], queryFunction: get(query, page)})
// }



// function useFetch(url) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         setData(json);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url]);

//   return { loading, data, error };
// }

export default useFetch
