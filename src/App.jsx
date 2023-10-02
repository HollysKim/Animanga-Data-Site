import { useState } from "react";
import PaginateResults from "./components/PaginateResults";
import AnimeSubPage from "./components/AnimeSubPage";
import Search from "./components/Search";
import SearchManga from "./components/SearchManga";
import SearchPeople from "./components/SearchPeople";
import SearchResults from "./components/SearchResults";
import CharacterSearchResults from "./components/CharacterSearchResults";
import CharacterSubPage from "./components/CharacterSubPage";
import SearchCharacters from "./components/SearchCharacters";
import PersonSubPage from "./components/PersonSubPage";
import Home from "./components/Home";
import FilterKeySearchWords from "./components/FilterKeySearchWords";
import Header from "./components/Header";
import logo from "./assets/logo.png";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  const [anime, setAnime] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [hasPagination, setHasPagination] = useState(false);
  const [url, setUrl] = useState(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [openResult, setOpenResult] = useState(false);
  const [animeComponent, setAnimeComponent] = useState(null);
  const [characterComponent, setCharacterComponent] = useState(null);
  const [peopleComponent, setPeopleComponent] = useState(null);
  const [userSearching, setUserSearching] = useState(false);
  const [goToHome, setGoToHome] = useState(true);
  const [adultFilter, setAdultFilter] = useState(true);
  const [genreFilter, setGenreFilter] = useState([]);
  const [filterCategory, setFilterCategory] = useState("anime");
  const [typeFilter, setTypeFilter] = useState(null);
  const [statusFilter, setStatusFilter] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [people, setPeople] = useState([]);
  const [orderBy, setOrderBy] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [renderPage, setRenderPage] = useState("home");
  const [searchingFor, setSearchingFor] = useState("animanga");

  const getAnimeSearchResults = async (e) => {
    e.preventDefault();
    let searchWord = e.target.text.value;
    let category = e.target.text.placeholder;
    let genre_ids = [];
    genreFilter.map((genre) => {
      genre_ids.push(genre.id);
    });
    setFilterCategory(category);
    setUserSearching(true);
    setGoToHome(false);
    setHasPagination(false);
    setOpenResult(false);
    setPageIndex(1);
    filterSearch(searchWord, genre_ids, category);
  };

  const getCharacterSearchResults = async (e) => {
    e.preventDefault();
    let character = e.target.text.value;
    setUserSearching(true);
    setGoToHome(false);
    setHasPagination(false);
    setOpenResult(false);
    setPageIndex(1);
    filterCharacterSearch(character);
  };

  const filterCharacterSearch = async (character) => {
    let baseURL;
    if (renderPage == "characters") {
      baseURL = `https://api.jikan.moe/v4/characters`;
    } else if (renderPage == "people") {
      baseURL = `https://api.jikan.moe/v4/people`;
    }
    if (orderBy !== null && orderBy !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?order_by=${orderBy}`)
        : (baseURL += `&order_by=${orderBy}`);
    }
    if (sortBy !== null && sortBy !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?sort=${sortBy}`)
        : (baseURL += `&sort=${sortBy}`);
    }
    if (character !== null && character.length > 0) {
      baseURL.includes("?") == false
        ? (baseURL += `?q=${character}`)
        : (baseURL += `&q=${character}`);
    }
    setUrl(baseURL);
    let urlData = await fetch(baseURL).then((res) => res.json());
    console.log(urlData);
    if (renderPage == "characters") {
      setCharacters(urlData.data);
    } else if (renderPage == "people") {
      setPeople(urlData.data);
    }
    if (urlData.pagination.items.total > 25) {
      setHasPagination(true);
    }
    if (urlData.data.length == 0) {
      setNoResults(true);
    }
  };

  const filterSearch = async (searchWord, genre_ids, category) => {
    let baseURL = `https://api.jikan.moe/v4/${category}`;
    if (adultFilter) {
      baseURL.includes("?") == false
        ? (baseURL += `?sfw`)
        : (baseURL += `&sfw`);
    }
    if (typeFilter !== null && typeFilter !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?type=${typeFilter}`)
        : (baseURL += `&type=${typeFilter}`);
    }
    if (orderBy !== null && orderBy !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?order_by=${orderBy}`)
        : (baseURL += `&order_by=${orderBy}`);
    }
    if (sortBy !== null && sortBy !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?sort=${sortBy}`)
        : (baseURL += `&sort=${sortBy}`);
    }
    if (statusFilter !== null && statusFilter !== "default") {
      baseURL.includes("?") == false
        ? (baseURL += `?status=${statusFilter}`)
        : (baseURL += `&status=${statusFilter}`);
    }
    if (genreFilter.length > 0) {
      baseURL.includes("?") == false
        ? (baseURL += `?genres=${genre_ids}`)
        : (baseURL += `&genres=${genre_ids}`);
    }
    if (searchWord.length > 0) {
      baseURL.includes("?") == false
        ? (baseURL += `?q=${searchWord}`)
        : (baseURL += `&q=${searchWord}`);
    }

    setUrl(baseURL);
    let urlData = await fetch(baseURL).then((res) => res.json());
    setAnime(urlData.data);
    if (urlData.data.length == 0) {
      setNoResults(true);
    }
    if (urlData.pagination.items.total > 25) {
      setHasPagination(true);
    }
  };

  const resultClicked = (result) => {
    setGenreFilter([]);
    setStatusFilter(null);
    setUserSearching(false);
    setGoToHome(false);
    setOpenResult(true);
    setHasPagination(false);
    setOrderBy(null);
    setSortBy(null);
    setNoResults(false);
    if (searchingFor == "animanga") {
      setAnimeComponent(result);
    } else if (searchingFor == "characters") {
      setCharacterComponent(result);
    } else {
      setPeopleComponent(result);
    }
  };

  const displayMoreResults = async (url) => {
    setPageIndex(pageIndex + 1);
    let updatedUrl;
    if (userSearching) {
      updatedUrl = `${url}&page=${pageIndex + 1}`;
    } else updatedUrl = `${url}?page=${pageIndex + 1}`;
    const temp = await fetch(updatedUrl).then((res) => res.json());
    console.log(temp.data.length);
    if (temp.data.length == 0) {
      setNoResults(true);
    } else {
      if (searchingFor == "animanga") {
        setAnime(anime.concat(temp.data));
      } else if (searchingFor == "characters") {
        setCharacters(characters.concat(temp.data));
      } else {
        setPeople(people.concat(temp.data));
      }
      if (temp.pagination.current_page < temp.pagination.last_visible_page) {
        setHasPagination(true);
      } else if (
        temp.pagination.current_page == temp.pagination.last_visible_page
      ) {
        setHasPagination(false);
      }
    }
  };

  const renderNewPage = (option) => {
    setRenderPage(option);
    setGenreFilter([]);
    setAdultFilter(true);
    setStatusFilter(null);
    setTypeFilter(null);
    setGoToHome(true);
    setAnime([]);
    setHasPagination(false);
    setSortBy(null);
    setOrderBy(null);
    setNoResults(false);
  };

  const Fallback = ({ error }) => {
    console.log(error);
    return (
      <div role='alert' style={{ textAlign: "center" }}>
        <p style={{ fontSize: 36 }}>Error:</p>
        <pre style={{ color: "red", fontSize: 24 }}>{error.message}</pre>
      </div>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <div>
        <Header renderNewPage={renderNewPage} />
        {renderPage == "anime" ? (
          <Search
            getAnimeSearchResults={getAnimeSearchResults}
            genreFilter={genreFilter}
            setGenreFilter={setGenreFilter}
            adultFilter={adultFilter}
            setAdultFilter={setAdultFilter}
            setFilterCategory={setFilterCategory}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            setSearchingFor={setSearchingFor}
            setSortBy={setSortBy}
          />
        ) : renderPage == "manga" ? (
          <SearchManga
            getAnimeSearchResults={getAnimeSearchResults}
            genreFilter={genreFilter}
            setGenreFilter={setGenreFilter}
            adultFilter={adultFilter}
            setAdultFilter={setAdultFilter}
            setFilterCategory={setFilterCategory}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            setSearchingFor={setSearchingFor}
            setOrderBy={setOrderBy}
            setSortBy={setSortBy}
            orderBy={orderBy}
            sortBy={sortBy}
          />
        ) : renderPage == "characters" ? (
          <SearchCharacters
            getCharacterSearchResults={getCharacterSearchResults}
            setSearchingFor={setSearchingFor}
            option={renderPage}
            setOrderBy={setOrderBy}
            setSortBy={setSortBy}
            orderBy={orderBy}
            sortBy={sortBy}
          />
        ) : renderPage == "people" ? (
          <SearchPeople
            getCharacterSearchResults={getCharacterSearchResults}
            setSearchingFor={setSearchingFor}
            option={renderPage}
            setOrderBy={setOrderBy}
            setSortBy={setSortBy}
            orderBy={orderBy}
            sortBy={sortBy}
          />
        ) : (
          <Home />
        )}
        <FilterKeySearchWords
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          orderBy={orderBy}
          setOrderBy={setOrderBy}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        {goToHome ? null : openResult ? (
          searchingFor == "animanga" ? (
            <AnimeSubPage
              anime={animeComponent}
              filterCategory={filterCategory}
            />
          ) : searchingFor == "characters" ? (
            <CharacterSubPage character={characterComponent} />
          ) : (
            <PersonSubPage person={peopleComponent} />
          )
        ) : searchingFor == "animanga" ? (
          <SearchResults anime={anime} resultClicked={resultClicked} />
        ) : (
          <CharacterSearchResults
            characters={characters}
            people={people}
            resultClicked={resultClicked}
            option={renderPage}
          />
        )}

        <PaginateResults
          hasPagination={hasPagination}
          displayMoreResults={() => displayMoreResults(url)}
          url={url}
        />
        {noResults ? (
          <h2 style={{ textAlign: "center" }}>No results.</h2>
        ) : null}
      </div>
    </ErrorBoundary>
  );
}

export default App;
