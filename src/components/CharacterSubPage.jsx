const CharacterSubPage = ({ character }) => {
  const data = character.data;
  return (
    <div className='sub-page-container'>
      <h1>{data.name}</h1>
      <img className='character-page-img' src={data.images.jpg.image_url}></img>
      <div className='character-bio'>{data.about}</div>
      <h2>Anime</h2>
      <div className='character-appearances-container'>
        {data.anime.map((val) => (
          <div className='character-appearances-item'>
            <img src={val.anime.images.jpg.image_url}></img>
            <p>{val.anime.title}</p>
            <p>{val.role}</p>
          </div>
        ))}
      </div>
      <h2>Manga</h2>
      <div className='character-appearances-container'>
        {data.manga.map((val) => (
          <div className='character-appearances-item'>
            <img
              className='character-appearance-img'
              src={val.manga.images.jpg.image_url}
            ></img>
            <p>{val.manga.title}</p>
            <p>{val.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterSubPage;
