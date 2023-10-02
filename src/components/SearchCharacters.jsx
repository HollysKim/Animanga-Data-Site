import { useRef } from "react";

const SearchCharacters = ({
  getCharacterSearchResults,
  setSearchingFor,
  option,
  setOrderBy,
  setSortBy,
  orderBy,
  sortBy,
}) => {
  const resetSelect = (event) => {
    event.preventDefault();
    setSearchingFor("characters");
    if (sortBy == null || orderBy == null) {
      selectOption.current.value = "default";
    }
    getCharacterSearchResults(event);
  };

  const orderOptionClicked = async (option) => {
    setOrderBy(option.target.value);
  };

  const sortOptionClicked = async (option) => {
    setSortBy(option.target.value);
  };

  const selectOption = useRef();

  const orders = ["name", "favorites"];

  const sorts = ["asc", "desc"];

  return (
    <div className='search-container'>
      <div className='search-subcontainer'>
        <form onSubmit={resetSelect} className='search-form'>
          <input name='text' type='text' placeholder={option}></input>
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
      </div>
    </div>
  );
};

export default SearchCharacters;
