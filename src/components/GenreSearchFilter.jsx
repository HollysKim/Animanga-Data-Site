const GenreSearchFilter = ({ genreFilter, setGenreFilter }) => {
  return (
    <div className='dropdown'>
      <button className='dropbtn'>Genres</button>
      <div className='dropdown-content'>
        <a onClick={() => setGenreFilter(genreFilter.concat("Action"))}>
          Action
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Adventure"))}>
          Adventure
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Avante Garde"))}>
          Avante Garde
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Award Winning"))}>
          Award Winning
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Boys Love"))}>
          Boys Love
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Comedy"))}>
          Comedy
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Drama"))}>Drama</a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Fantasy"))}>
          Fantasy
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Girls Love"))}>
          Girls Love
        </a>
        <a onClick={() => setGenreFilter([])}>Clear</a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Gourmet"))}>
          Gourmet
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Horror"))}>
          Horror
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Mystery"))}>
          Mystery
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Romance"))}>
          Romance
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Sci-Fi"))}>
          Sci-Fi
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Slice of Life"))}>
          Slice of Life
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Sports"))}>
          Sports
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Supernatural"))}>
          Supernatural
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Suspense"))}>
          Suspense
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Ecchi"))}>Ecchi</a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Adult Cast"))}>
          Adult Cast
        </a>
        <a
          onClick={() => setGenreFilter(genreFilter.concat("Anthropomorphic"))}
        >
          Anthropomorphic
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("CGDCT"))}>CGDCT</a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Delinquents"))}>
          Delinquents
        </a>
        <a onClick={() => setGenreFilter(genreFilter.concat("Detective"))}>
          Detective
        </a>
      </div>
    </div>
  );
};

export default GenreSearchFilter;
