const PaginateResults = ({ hasPagination, displayMoreResults, url }) => {
  return (
    <div className='paginate-btn-container'>
      {hasPagination ? (
        <button
          className='display-more-btn'
          onClick={() => displayMoreResults()}
        >
          More results
        </button>
      ) : null}
    </div>
  );
};

export default PaginateResults;
