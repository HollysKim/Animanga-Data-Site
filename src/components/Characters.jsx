import { useState } from "react";

const Characters = ({ characterList }) => {
  let k = 2;
  let japVA;

  return (
    <div className='character-container'>
      {characterList.data.map((data) => (
        <div className='character-subcontainer' key={data.character.mal_id}>
          <img
            className='character-img'
            src={data.character.images.jpg.image_url}
          ></img>
          <div className='character-staff-subcontainer'>
            <p className='character-name' key={data.character.mal_id}>
              {data.character.name}
            </p>
            <p key={k + 1}>{data.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
