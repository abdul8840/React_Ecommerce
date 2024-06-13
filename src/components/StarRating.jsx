import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ count }) => {
  // Ensure count is within the limits
  const validCount = Math.max(1, Math.min(count, 5));

  // एक array बनाएं जिसमें validCount के आधार पर stars भरें
  const stars = Array.from({ length: validCount }, (_, index) => (
    <FaStar key={index} className="text-yellow-500 text-xl mt-1" />
  ));

  return <div className="flex">{stars}</div>;
};

export default StarRating;
