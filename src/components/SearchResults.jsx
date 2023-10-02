const SearchResults = ({ anime, resultClicked }) => {
  console.log(anime);
  return (
    <div className='search-results-grid'>
      {anime.map((anime) => (
        <div
          key={anime.mal_id}
          className='game-search-result'
          onClick={() => resultClicked(anime)}
        >
          <img
            className={
              anime.rating == "Rx - Hentai" ? "thumbnail-adult" : "thumbnail"
            }
            src={anime.images.jpg.image_url}
          ></img>
          <p className='search-result-title'>{anime.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
