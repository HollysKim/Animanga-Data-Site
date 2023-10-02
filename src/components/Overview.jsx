const Overview = ({ anime }) => {
  console.log(anime);
  return (
    <div className='overview-container'>
      <div className='overview-subcontainer'>
        <h1>{anime.title}</h1>
        <img
          className='subPageImage'
          src={anime.images.jpg.large_image_url}
        ></img>
        <div>
          <br />
          Type <p className='overview-info'>{anime.type}</p>
          <br />
          Episodes <p className='overview-info'>{anime.episodes}</p>
          <br />
          Status <p className='overview-info'>{anime.status}</p>
          <br />
          Aired <p className='overview-info'>{anime.aired.string}</p>
          <br />
          Broadcast <p className='overview-info'>{anime.broadcast.string}</p>
          <br />
          Licensors
          {anime.producers.map((producer) => (
            <p className='overview-info' key={producer.mal_id}>
              {producer.name}
            </p>
          ))}
          <br />
          Studios{" "}
          {anime.studios.map((studio) => (
            <p className='overview-info' key={studio.mal_id}>
              {studio.name}
            </p>
          ))}
          <br />
          Source <p className='overview-info'>{anime.source}</p>
          <br />
          Genres{" "}
          {anime.genres.map((genre) => (
            <p className='overview-info' key={genre.mal_id}>
              {genre.name}
            </p>
          ))}
          <br />
          Themes{" "}
          {anime.themes.map((theme) => (
            <p className='overview-info' key={theme.mal_id}>
              {theme.name}
            </p>
          ))}{" "}
          <br />
          Duration <p className='overview-info'>{anime.duration}</p>
          <br />
          Rating <p className='overview-info'>{anime.rating}</p>
        </div>
        <br />
      </div>
      <div className='synopsis'>
        <h2>Synopsis</h2>
        <p>{anime.synopsis.slice(0, anime.synopsis.length - 24)}</p>
      </div>
    </div>
  );
};

export default Overview;
