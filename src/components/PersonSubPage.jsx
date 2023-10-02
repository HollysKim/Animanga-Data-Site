const PersonSubPage = ({ person }) => {
  const animeData = person.data.anime;
  const mangaData = person.data.manga;
  const voicesData = person.data.voices;
  return (
    <div className='sub-page-container'>
      <h1>{person.data.name}</h1>
      <img
        className='character-page-img'
        src={person.data.images.jpg.image_url}
      ></img>
      <div className='character-bio'>{person.data.about}</div>
      {animeData.length > 0 ? (
        <div>
          <h2 className='appearances-role-h2'>Anime Roles</h2>
          <div className='character-appearances-container'>
            {animeData.map((val) => (
              <div
                className='character-appearances-item'
                key={val.anime.mal_id}
              >
                <img src={val.anime.images.jpg.image_url}></img>
                <p>{val.anime.title}</p>
                <p>{val.position.slice(4, val.position.length)}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {mangaData.length > 0 ? (
        <div>
          <h2 className='appearances-role-h2'>Manga Roles</h2>
          <div className='character-appearances-container'>
            {mangaData.map((val) => (
              <div
                className='character-appearances-item'
                key={val.manga.mal_id}
              >
                <img
                  className='character-appearance-img'
                  src={val.manga.images.jpg.image_url}
                ></img>
                <p>{val.manga.title}</p>
                <p>{val.position}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
      {voicesData.length > 0 ? (
        <div>
          <h2 className='appearances-role-h2'>Voice Roles</h2>
          <div className='character-appearances-container'>
            {voicesData.map((val) => (
              <div
                className='character-appearances-item'
                key={val.anime.mal_id}
              >
                <img
                  className='character-appearance-img'
                  src={val.anime.images.jpg.image_url}
                ></img>
                <p>{val.anime.title}</p>
                <p>{val.role}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PersonSubPage;
