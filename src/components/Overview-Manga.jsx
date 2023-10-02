const OverviewManga = ({ manga }) => {
  console.log(manga);
  return (
    <div className='overview-container'>
      <div className='overview-subcontainer'>
        <h1>{manga.title}</h1>
        <img
          className='subPageImage'
          src={manga.images.jpg.large_image_url}
        ></img>
        <div>
          <br />
          Type <p className='overview-info'>{manga.type}</p>
          <br />
          Chapters{" "}
          <p className='overview-info'>
            {manga.chapters == null ? "Not Finished" : manga.chapters}
          </p>
          <br />
          Volumes{" "}
          <p className='overview-info'>
            {manga.volumes == null ? "Not Finished" : manga.volumes}
          </p>
          <br />
          Status <p className='overview-info'>{manga.status}</p>
          <br />
          Published from
          <p className='overview-info'>{manga.published.string}</p>
          <br />
          Serializations
          {manga.serializations.map((val) => (
            <p className='overview-info' key={val.mal_id}>
              {val.name}
            </p>
          ))}
          <br />
          Genres{" "}
          {manga.genres.map((genre) => (
            <p className='overview-info' key={genre.mal_id}>
              {genre.name}
            </p>
          ))}
          <br />
          Themes{" "}
          {manga.themes.map((theme) => (
            <p className='overview-info' key={theme.mal_id}>
              {theme.name}
            </p>
          ))}{" "}
          <br />
        </div>
        <br />
      </div>
      <div className='synopsis'>
        <h2>Synopsis</h2>
        <p>{manga.synopsis.slice(0, manga.synopsis.length - 24)}</p>
      </div>
    </div>
  );
};

export default OverviewManga;
