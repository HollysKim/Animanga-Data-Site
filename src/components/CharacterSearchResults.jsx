const CharacterSearchResults = ({
  characters,
  people,
  resultClicked,
  option,
}) => {
  const getCharacterFullInfo = async (id) => {
    let baseURL = `https://api.jikan.moe/v4/${option}/${id}/full`;
    let urlData = await fetch(baseURL).then((res) => res.json());
    resultClicked(urlData);
  };
  return (
    <div className='search-results-grid'>
      {option == "characters"
        ? characters.map((character) => (
            <div
              key={character.mal_id}
              className='game-search-result'
              onClick={() => getCharacterFullInfo(character.mal_id)}
            >
              <img
                className='thumbnail'
                src={character.images.jpg.image_url}
              ></img>
              <p className='search-result-title'>{character.name}</p>
            </div>
          ))
        : people.map((person) => (
            <div
              key={person.mal_id}
              className='game-search-result'
              onClick={() => getCharacterFullInfo(person.mal_id)}
            >
              <img
                className='thumbnail'
                src={person.images.jpg.image_url}
              ></img>
              <p className='search-result-title'>{person.name}</p>
            </div>
          ))}
    </div>
  );
};

export default CharacterSearchResults;
