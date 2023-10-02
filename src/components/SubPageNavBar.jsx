const NavBar = ({
  setNavBarOption,
  anime,
  setCharacterList,
  setStaffList,
  setReviewList,
  filterCategory,
}) => {
  const navBarOptionClicked = (option) => {
    if (option == "overview") {
      setNavBarOption("overview");
    } else if (option == "characters") {
      getCharacters();
    } else {
      setNavBarOption("staff");
    }
  };

  const getCharacters = async () => {
    console.log(anime);
    let temp;
    if (filterCategory == "anime") {
      temp = await fetch(
        `https://api.jikan.moe/v4/anime/${anime.mal_id}/characters`
      ).then((res) => res.json());
    } else {
      temp = await fetch(
        `https://api.jikan.moe/v4/manga/${anime.mal_id}/characters`
      ).then((res) => res.json());
    }

    console.log(temp);
    setCharacterList(temp);
    setNavBarOption("characters");
  };

  const getStaff = async () => {
    let temp;
    if (filterCategory == "anime") {
      temp = await fetch(
        `https://api.jikan.moe/v4/anime/${anime.mal_id}/staff`
      ).then((res) => res.json());
    } else {
      temp = anime.authors;
    }
    console.log(temp);
    setStaffList(temp);
    setNavBarOption("staff");
  };

  const getReviews = async () => {
    let temp;
    if (filterCategory == "anime") {
      temp = await fetch(
        `https://api.jikan.moe/v4/anime/${anime.mal_id}/reviews`
      ).then((res) => res.json());
    } else {
      temp = await fetch(
        `https://api.jikan.moe/v4/manga/${anime.mal_id}/reviews`
      ).then((res) => res.json());
    }
    console.log(temp);
    setReviewList(temp);
    setNavBarOption("reviews");
  };

  return (
    <header className='navbar'>
      <h3 className='navOption' onClick={() => navBarOptionClicked("overview")}>
        Overview
      </h3>
      <h3 className='navOption' onClick={() => getCharacters()}>
        Characters
      </h3>
      <h3 className='navOption' onClick={() => getStaff()}>
        Staff
      </h3>
      <h3 className='navOption' onClick={() => getReviews()}>
        Reviews
      </h3>
    </header>
  );
};

export default NavBar;
