// components/Rating.js
import React from "react";

const ProductRating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Get the integer part of the rating
  const hasHalfStar = rating - filledStars >= 0.5; // Check if the rating has a half star

  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      let starClass = "w-5 h-5 fill-current";

      if (i <= filledStars) {
        starClass += " text-yellow-500"; // Filled star
      } else if (hasHalfStar && i === filledStars + 1) {
        starClass += " text-yellow-500"; // Half-filled star
      } else {
        starClass += " text-gray-300"; // Empty star
      }

      stars.push(
        <svg key={i} className={starClass} viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 1L8.61438 4.47214L5 4.23607L7.5 6.76393L6.42919 10L10 8.94427L13.5708 10L12.5 6.76393L15 4.23607L11.3856 4.47214L10 1ZM3 4.99996C3 4.44769 3.44772 3.99996 4 3.99996H7.5L9 1.76393L10.5 3.99996H14C14.5523 3.99996 15 4.44769 15 4.99996V9.05025C15 9.33068 14.8538 9.5949 14.6094 9.75808L11.5 11.8332L12.2683 15.9772C12.3215 16.3073 12.0511 16.5765 11.721 16.5232L8.00006 15.4962L4.27913 16.5232C3.94897 16.5765 3.67864 16.3073 3.73182 15.9772L4.50006 11.8332L1.39062 9.75808C1.14618 9.5949 1 9.33068 1 9.05025V4.99996Z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="flex items-center">
      <div className="mr-1">{rating.toFixed(1)}</div>
      {renderStars()}
    </div>
  );
};

export default ProductRating;
