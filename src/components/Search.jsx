import { useRef } from "react";

const Home = ({
  getAnimeSearchResults,
  genreFilter,
  setGenreFilter,
  adultFilter,
  setAdultFilter,
  setFilterCategory,
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
  orderBy,
  setOrderBy,
  setSearchingFor,
  setSortBy,
}) => {
  const genreOptions = [
    {
      mal_id: 1,
      name: "Action",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 2,
      name: "Adventure",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 5,
      name: "Avant Garde",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 46,
      name: "Award Winning",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 28,
      name: "Boys Love",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 4,
      name: "Comedy",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 8,
      name: "Drama",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 10,
      name: "Fantasy",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 26,
      name: "Girls Love",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 47,
      name: "Gourmet",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 14,
      name: "Horror",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 7,
      name: "Mystery",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 22,
      name: "Romance",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 24,
      name: "Sci-Fi",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 36,
      name: "Slice of Life",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 30,
      name: "Sports",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 37,
      name: "Supernatural",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 41,
      name: "Suspense",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 9,
      name: "Ecchi",
      color: "rgb(170, 190, 255)",
    },
    {
      mal_id: 50,
      name: "Adult Cast",
      color: "white",
    },
    {
      mal_id: 51,
      name: "Anthropomorphic",
      color: "white",
    },
    {
      mal_id: 52,
      name: "CGDCT",
      color: "white",
    },
    {
      mal_id: 53,
      name: "Childcare",
      color: "white",
    },
    {
      mal_id: 54,
      name: "Combat Sports",
      color: "white",
    },
    {
      mal_id: 81,
      name: "Crossdressing",
      color: "white",
    },
    {
      mal_id: 55,
      name: "Delinquents",
      color: "white",
    },
    {
      mal_id: 39,
      name: "Detective",
      color: "white",
    },
    {
      mal_id: 56,
      name: "Educational",
      color: "white",
    },
    {
      mal_id: 57,
      name: "Gag Humor",
      color: "white",
    },
    {
      mal_id: 58,
      name: "Gore",
      color: "white",
    },
    {
      mal_id: 35,
      name: "Harem",
      color: "white",
    },
    {
      mal_id: 59,
      name: "High Stakes Game",
      color: "white",
    },
    {
      mal_id: 13,
      name: "Historical",
      color: "white",
    },
    {
      mal_id: 60,
      name: "Idols (Female)",
      color: "white",
    },
    {
      mal_id: 61,
      name: "Idols (Male)",
      color: "white",
    },
    {
      mal_id: 62,
      name: "Isekai",
      color: "white",
    },
    {
      mal_id: 63,
      name: "Iyashikei",
      color: "white",
    },
    {
      mal_id: 64,
      name: "Love Polygon",
      color: "white",
    },
    {
      mal_id: 65,
      name: "Magical Sex Shift",
      color: "white",
    },
    {
      mal_id: 66,
      name: "Mahou Shoujo",
      color: "white",
    },
    {
      mal_id: 17,
      name: "Martial Arts",
      color: "white",
    },
    {
      mal_id: 18,
      name: "Mecha",
      color: "white",
    },
    {
      mal_id: 67,
      name: "Medical",
      color: "white",
    },
    {
      mal_id: 38,
      name: "Military",
      color: "white",
    },
    {
      mal_id: 19,
      name: "Music",
      color: "white",
    },
    {
      mal_id: 6,
      name: "Mythology",
      color: "white",
    },
    {
      mal_id: 68,
      name: "Organized Crime",
      color: "white",
    },
    {
      mal_id: 69,
      name: "Otaku Culture",
      color: "white",
    },
    {
      mal_id: 20,
      name: "Parody",
      color: "white",
    },
    {
      mal_id: 70,
      name: "Performing Arts",
      color: "white",
    },
    {
      mal_id: 71,
      name: "Pets",
      color: "white",
    },
    {
      mal_id: 40,
      name: "Psychological",
      color: "white",
    },
    {
      mal_id: 3,
      name: "Racing",
      color: "white",
    },
    {
      mal_id: 72,
      name: "Reincarnation",
      color: "white",
    },
    {
      mal_id: 73,
      name: "Reverse Harem",
      color: "white",
    },
    {
      mal_id: 74,
      name: "Romantic Subtext",
      color: "white",
    },
    {
      mal_id: 21,
      name: "Samurai",
      color: "white",
    },
    {
      mal_id: 23,
      name: "School",
      color: "white",
    },
    {
      mal_id: 75,
      name: "Showbiz",
      color: "white",
    },
    {
      mal_id: 29,
      name: "Space",
      color: "white",
    },
    {
      mal_id: 11,
      name: "Strategy Game",
      color: "white",
    },
    {
      mal_id: 31,
      name: "Super Power",
      color: "white",
    },
    {
      mal_id: 76,
      name: "Survival",
      color: "white",
    },
    {
      mal_id: 77,
      name: "Team Sports",
      color: "white",
    },
    {
      mal_id: 78,
      name: "Time Travel",
      color: "white",
    },
    {
      mal_id: 32,
      name: "Vampire",
      color: "white",
    },
    {
      mal_id: 79,
      name: "Video Game",
      color: "white",
    },
    {
      mal_id: 80,
      name: "Visual Arts",
      color: "white",
    },
    {
      mal_id: 48,
      name: "Workplace",
      color: "white",
    },
    {
      mal_id: 43,
      name: "Josei",
      color: "white",
    },
    {
      mal_id: 15,
      name: "Kids",
      color: "white",
    },
    {
      mal_id: 42,
      name: "Seinen",
      color: "white",
    },
    {
      mal_id: 25,
      name: "Shoujo",
      color: "white",
    },
    {
      mal_id: 27,
      name: "Shounen",
      color: "white",
    },
  ];

  const types = ["TV", "Movie", "OVA", "Special", "ONA", "Music"];

  const statuses = ["airing", "complete", "upcoming"];
  const genreOptionClicked = async (option) => {
    if (
      genreFilter.length < 1 ||
      genreFilter.filter((genres) => genres.name == option.target.value)
        .length == 0
    ) {
      genreOptions.map((genre) => {
        if (genre.name == option.target.value) {
          setGenreFilter(
            genreFilter.concat({ name: genre.name, id: genre.mal_id })
          );
        }
      });
    }
  };

  const typeOptionClicked = async (option) => {
    setTypeFilter(option.target.value);
  };

  const statusOptionClicked = async (option) => {
    setStatusFilter(option.target.value);
  };

  const orderOptionClicked = async (option) => {
    setOrderBy(option.target.value);
  };

  const sortOptionClicked = async (option) => {
    setSortBy(option.target.value);
  };

  const orders = [
    "title",
    "episodes",
    "score",
    "rank",
    "popularity",
    "favorites",
  ];

  const sorts = ["asc", "desc"];

  const selectOption = useRef();

  const resetSelect = (event) => {
    event.preventDefault();
    if (
      genreFilter.length == 0 ||
      typeFilter == null ||
      statusFilter == null ||
      orderBy == null
    ) {
      selectOption.current.value = "default";
    }
    setFilterCategory("anime");
    setSearchingFor("animanga");
    getAnimeSearchResults(event);
  };

  return (
    <div className='search-container'>
      <div className='search-subcontainer'>
        <form onSubmit={resetSelect} className='search-form'>
          <input name='text' type='text' placeholder='anime'></input>
          <select
            className='genre-menu'
            defaultValue='default'
            ref={selectOption}
            name='genre'
            onChange={genreOptionClicked}
          >
            <option disabled hidden value='default'>
              Select a genre
            </option>
            {genreOptions.map((genre) => (
              <option key={genre.mal_id} style={{ color: genre.color }}>
                {genre.name}
              </option>
            ))}
          </select>
          <select
            className='genre-menu'
            onChange={typeOptionClicked}
            name='type'
            defaultValue='default'
            ref={selectOption}
          >
            <option disabled hidden value='default'>
              Select a type
            </option>
            {types.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
          <select
            className='genre-menu'
            onChange={statusOptionClicked}
            name='status'
            defaultValue='default'
            ref={selectOption}
          >
            <option disabled hidden value='default'>
              Select a status
            </option>
            {statuses.map((status) => (
              <option key={status}>{status}</option>
            ))}
          </select>
          <select
            className='genre-menu'
            onChange={orderOptionClicked}
            name='order'
            defaultValue='default'
            ref={selectOption}
          >
            <option disabled hidden value='default'>
              Order by
            </option>
            {orders.map((order) => (
              <option key={order}>{order}</option>
            ))}
          </select>
          <select
            className='genre-menu'
            onChange={sortOptionClicked}
            name='order'
            defaultValue='default'
            ref={selectOption}
          >
            <option disabled hidden value='default'>
              Sort by
            </option>
            {sorts.map((sort) => (
              <option key={sort}>{sort}</option>
            ))}
          </select>
        </form>

        <label
          onChange={() => setAdultFilter(!adultFilter)}
          className='container'
        >
          Adult
          <input type='checkbox' id='adult' />
          <span className='checkmark'></span>
        </label>
      </div>
    </div>
  );
};

export default Home;
