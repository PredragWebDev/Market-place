import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { callReviews } from "../../features/PlayerReviewSlice/PlayerReviewSlice";
import ReviewAll from "../ReviewAll/ReviewAll";

const PlayerReviwe = ({PlayerName}) => {
    console.log(PlayerName);
    
  const [singlePlayerReviews, setSinglePlayerReviews] = useState([]);
  
  const allReviews = useSelector((state) => state.reviews?.reviews);
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(callReviews())
  }, []);
  
    useEffect(() => {
        const _reviews = allReviews?.filter(review=>review.PlayerName === PlayerName)
        setSinglePlayerReviews(_reviews)
    }, [allReviews.length,PlayerName]);

  return (
    <Container>
      <h1 style={{ marginBottom: "50px" }}>Comments ({singlePlayerReviews.length})</h1>

      <div className="Player_all">
        {singlePlayerReviews.map((singlePlayer) => (
          <ReviewAll key={singlePlayer._id} playersReview={singlePlayer} />
        ))}
      </div>
    </Container>
  );
};

export default PlayerReviwe;