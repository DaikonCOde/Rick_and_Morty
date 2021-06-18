import React from 'react';
import { Link } from 'react-router-dom';

import '../style/card.css';

const Cards = (props) => {
  const data = props.data.results;
  console.log(data);

  return (
    <div className="container-cards">
      {data.map(character => (
        
          <article className="card-item" key={character.id}>
            <Link to={'/character/' + character.id} className="card-item-link" >
              <div className="content-card-image">
                <img src={character.image} className="card-item-image" />
                <div className="content-character-info">
                  <span className="card-item-status" >Status: {character.status}</span>
                  <span className="card-item-gender">Gender: {character.gender}</span>
                  <span className="card-item-specie">Specie: {character.species}</span>
                  <span className="card-item-location">Origin: {character.origin.name}</span>
                </div>
              </div>
                <h2 className="card-item-name" >{character.name}</h2>
            </Link>
          </article>
        
        ))}
    </div>
  )
}

export default Cards;