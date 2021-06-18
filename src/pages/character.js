import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../components/loader';
import SingleCharacter from '../components/single-character';

function Character () {

  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  React.useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const dataCharacter = await response.json();
      
      setData(dataCharacter);
      setIsLoaded(true);
      
    } catch (error) {
      setError(error);
      setIsLoaded(false);
    }
  };
  

  if(error) {
    return <h1>Hubo un error</h1>
  } else if (!isLoaded) {
    return <Loader />
  } else if(data) {
    return (
      <React.Fragment>
        <SingleCharacter data= {data} id = {id} />
      </React.Fragment>
    )
  }
}


export default Character;