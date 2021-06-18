import React from 'react';

import '../style/single-character.css';

const SingleCharacter = (props) => {
  
  const { data, id } = props;


  const next = (parseInt(id) + 1).toString();
  const prev = (parseInt(id) - 1).toString();

  const styleButton = {
    visibility: prev == '0' ? 'hidden' : 'visible'
  }

  return (
    <div className="container-character">
      <div className="character-img">
        <img src={data.image} alt="" />
      </div>
      <div className="character-info">
        <h2 className="character-info-name">
          {data.name}
        </h2>
        <div className="about-character">
          <span className="about-character-status">Status: {data.status}</span>
          <span className="about-character-gender">Gender: {data.gender}</span>
          <span className="about-character-species">Especies: {data.species}</span>
          <span className="about-character-origin">Origin: {data.origin.name}</span>
          <span className="about-character-episode">Episodes: {data.episode.length} episodes</span>
        </div>
        <div className="content-btns">
          <a className="btn btn-prev" style={styleButton} href={`/character/${prev}`}>Prev</a>
          <a className="btn btn-next" href={`/character/${next}`}>Next</a>
        </div>
      </div>

    </div>
  )
} 

export default SingleCharacter;