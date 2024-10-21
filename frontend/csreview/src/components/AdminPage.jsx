import React, { useState } from "react";

const AdminPage = ({ pendingReviews, setPendingReviews, reviews, setReviews }) => {
    const handleApprove = (category, index) => {
        const updatedReviews = { ...reviews };
        updatedReviews[category].push(pendingReviews[category][index]);

        const updatedPendingReviews = { ...pendingReviews };
        updatedPendingReviews[category].splice(index, 1);
        setPendingReviews(updatedPendingReviews);
        setReviews(updatedReviews);
    };

    const handleDeny = (category, index) => {
        const updatedPendingReviews = { ...pendingReviews };
        updatedPendingReviews[category].splice(index, 1);
        setPendingReviews(updatedPendingReviews);
    };

    const categories = ["restaurant", "shops", "services"];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

            {categories.map((category) => (
                <div key={category} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                        {category.charAt(0).toUpperCase() + category.slice(1)} Reviews
                    </h3>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        {pendingReviews[category].length === 0 ? (
                            <p className="text-gray-600">No pending reviews.</p>
                        ) : (
                            pendingReviews[category].map((review, index) => (
                                <div key={index} className="mb-4 border-b border-gray-300 pb-4">
                                    <h4 className="text-xl font-semibold mb-1">{review.businessName}</h4>
                                    <p className="text-sm text-gray-600 mb-1">Description: {review.description}</p>
                                    <p className="text-sm text-gray-600 mb-1">Review: {review.review}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <p className="text-sm text-gray-600">Quality Rating: {review.ratingQuality}/5</p>
                                        <p className="text-sm text-gray-600">Service Rating: {review.ratingService}/5</p>
                                        <p className="text-sm text-gray-600">Value Rating: {review.ratingValue}/5</p>
                                    </div>
                                    <div className="mt-2">
                                        <button
                                            className="mr-2 bg-green-600 text-white py-1 px-3 rounded-md hover:bg-green-700"
                                            onClick={() => handleApprove(category, index)}
                                        >
                                            Approve
                                        </button>
                                        <button
                                            className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700"
                                            onClick={() => handleDeny(category, index)}
                                        >
                                            Deny
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPage;
