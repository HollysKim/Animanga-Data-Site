const FilterKeySearchWords = ({
  genreFilter,
  setGenreFilter,
  typeFilter,
  setTypeFilter,
  statusFilter,
  setStatusFilter,
  orderBy,
  setOrderBy,
  sortBy,
  setSortBy,
}) => {
  const filterGenreOut = (genre) => {
    setGenreFilter(genreFilter.filter((g) => g !== genre));
  };

  const filterTypeOut = () => {
    setTypeFilter(null);
  };

  const filterStatusOut = () => {
    setStatusFilter(null);
  };

  const filterOrderOut = () => {
    setOrderBy(null);
  };

  const filterSortrOut = () => {
    setSortBy(null);
  };

  return (
    <div className='filter-keywords-container'>
      {genreFilter.map((genre) => (
        <div className='filter-keyword' key={genre.id}>
          <p>{genre.name}</p>
          <p className='delete-keyword' onClick={() => filterGenreOut(genre)}>
            X
          </p>
        </div>
      ))}
      {typeFilter !== null && typeFilter.length !== 0 ? (
        <div className='filter-keyword' key={typeFilter}>
          <p>{typeFilter}</p>
          <p className='delete-keyword' onClick={() => filterTypeOut()}>
            X
          </p>
        </div>
      ) : null}
      {statusFilter !== null && statusFilter.length !== 0 ? (
        <div className='filter-keyword' key={statusFilter}>
          <p>{statusFilter}</p>
          <p className='delete-keyword' onClick={() => filterStatusOut()}>
            X
          </p>
        </div>
      ) : null}
      {orderBy !== null && orderBy.length !== 0 ? (
        <div className='filter-keyword' key={orderBy}>
          <p>{orderBy}</p>
          <p className='delete-keyword' onClick={() => filterOrderOut()}>
            X
          </p>
        </div>
      ) : null}
      {sortBy !== null && sortBy.length !== 0 ? (
        <div className='filter-keyword' key={sortBy}>
          <p>{sortBy}</p>
          <p className='delete-keyword' onClick={() => filterSortrOut()}>
            X
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default FilterKeySearchWords;
