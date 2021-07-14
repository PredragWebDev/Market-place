import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ReviewAll.css";
import { Rating } from "@mui/material";

const ReviewAll = (porps) => {
  const { url, name, PlayerName, deatls, email, feedback } = porps.playersReview;

console.log(name,"=",PlayerName);
  return (
    <div className="Review-Part">
      <div className="images">
        <img src={url} alt="" />
      </div>
      <div className="Text-Areaya">
        <div>
          <h4>{name}</h4>
          <Rating
            name="feedback"
            value={feedback}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
        </div>
        <p style={{ width: "400px", marginTop: "10px" }}>{deatls}</p>
      </div>
    </div>
  );
};

export default ReviewAll;
