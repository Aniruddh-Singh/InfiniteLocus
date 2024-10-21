import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const BusinessProfile = () => {
  const { id } = useParams();
  const [business, setBusiness] = useState(null);
  if (!business) return <div>Loading...</div>;

  return (
    <>
      <div className="container">
        <h2>{business.name}</h2>
        <p>{business.description}</p>
        <p>Location: {business.location}</p>
        <p>Rating: {business.averageRating} ⭐</p>

        {/* <Link to={/submit-review/${id}} className="btn">Submit Review</Link> */}

        <h3>Reviews</h3>
        <ul>
          {business.reviews.map((review, index) => (
            <li key={index}>
              <p>Rating: {review.rating} ⭐</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      </div >
    </>
  );
};

export default BusinessProfile;