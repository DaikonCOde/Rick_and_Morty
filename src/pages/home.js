import React, { useState } from 'react';
import Cards from '../components/cards';

import Loader from '../components/loader';
import '../style/nav.css';

const  Home= () => {

  const [data, setData] = useState({
    results: []
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(1);

  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    setIsLoaded(true)
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${nextPage}`);
      const dataCharacter = await response.json()
      setData({
        info: dataCharacter.info,
        results: [...data.results, ...dataCharacter.results]
      });
      setNextPage(nextPage + 1)
      setIsLoaded(false);
    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
  };
  
  if (error) {
    return (
      <h1>lo sentimos hubo un error</h1>
      )
  } else if (data) {
    return (
      <React.Fragment>
        {
          isLoaded && ( <Loader /> )
        }
        <Cards data = {data} />
        <button className="btn btn-view-more" onClick={getData}>View More</button>
      </React.Fragment>
    )
  }
}

export default Home;