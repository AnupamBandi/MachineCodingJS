import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseMove = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setRating(rating);
  };

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={(hover || rating) >= index ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            size={40}
          ></FaStar>
        );
      })}
    </div>
  );
};

export default StarRating;
