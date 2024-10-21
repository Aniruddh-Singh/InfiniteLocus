import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SubmitReview = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = { rating, comment };
    };

    return (
        <div className="container">
            <h2>Submit Review</h2>
            <form onSubmit={handleSubmit}>
                <label>Rating:</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                </select>

                <label>Comment:</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SubmitReview;