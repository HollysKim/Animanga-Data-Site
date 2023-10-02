const Reviews = ({ reviewList }) => {
  console.log(reviewList);
  return (
    <div className='review-container'>
      <div className='review-subcontainer'>
        {reviewList.data.map((review) => (
          <div key={review.mal_id}>
            <h3>{review.user.username}</h3>
            <h3
              style={{
                color:
                  review.score > 6
                    ? "green"
                    : review.score > 3
                    ? "yellow"
                    : "red",
              }}
            >
              {review.score}
            </h3>
            <h3>{review.tags}</h3>
            <p key={review.mal_id}>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
