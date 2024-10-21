import React, { useState } from "react";

const predefinedBusinesses = {
    restaurant: [
        { businessName: "Pizza Palace", description: "Best pizza in town!" },
        { businessName: "Burger Bonanza", description: "Juicy burgers and fries" },
        { businessName: "Sushi World", description: "Authentic sushi experience" },
        { businessName: "Pasta Heaven", description: "Delicious pasta dishes" },
        { businessName: "Taco Fiesta", description: "Spicy tacos with fresh ingredients" },
    ],
    shops: [
        { businessName: "Tech Store", description: "Latest gadgets and electronics" },
        { businessName: "Fashion Forward", description: "Trendy clothing and accessories" },
        { businessName: "Book Haven", description: "A wide selection of books" },
        { businessName: "Fitness Zone", description: "Top-notch fitness equipment" },
        { businessName: "Home Essentials", description: "Household items and decor" },
    ],
    services: [
        { businessName: "Laundry Express", description: "Quick and reliable laundry service" },
        { businessName: "Car Care", description: "Professional car wash and detailing" },
        { businessName: "Plumbing Pro", description: "Expert plumbing solutions" },
        { businessName: "ElectricFix", description: "Skilled electricians for all needs" },
        { businessName: "Cleaning Squad", description: "Efficient and thorough home cleaning" },
    ],
};


// Dummy data for viewing ratings (pre-filled with 5 entries per category)
const initialReviews = {
    restaurant: [
        { businessName: "Pizza Palace", category: "Restaurant", description: "Best pizza in town!", review: "Amazing taste!", ratingQuality: 5, ratingService: 4, ratingValue: 5 },
        { businessName: "Burger Spot", category: "Restaurant", description: "Great burgers!", review: "Affordable and tasty.", ratingQuality: 4, ratingService: 4, ratingValue: 4 },
        { businessName: "Sushi House", category: "Restaurant", description: "Authentic sushi", review: "Loved the freshness.", ratingQuality: 5, ratingService: 5, ratingValue: 4 },
        { businessName: "Italian Delight", category: "Restaurant", description: "Fine Italian cuisine", review: "Good ambiance.", ratingQuality: 4, ratingService: 4, ratingValue: 3 },
        { businessName: "Spicy Treat", category: "Restaurant", description: "Indian flavors", review: "Spicy and delicious.", ratingQuality: 4, ratingService: 3, ratingValue: 5 },
    ],
    shops: [
        { businessName: "Tech Store", category: "Shops", description: "Electronics store", review: "Wide selection.", ratingQuality: 4, ratingService: 3, ratingValue: 4 },
        { businessName: "Fashion Hub", category: "Shops", description: "Trendy clothing", review: "Stylish collection.", ratingQuality: 5, ratingService: 5, ratingValue: 5 },
        { businessName: "Gadget World", category: "Shops", description: "Affordable gadgets", review: "Good variety.", ratingQuality: 4, ratingService: 3, ratingValue: 4 },
        { businessName: "Home Essentials", category: "Shops", description: "Furniture and more", review: "High-quality items.", ratingQuality: 5, ratingService: 4, ratingValue: 4 },
        { businessName: "Outdoor Gear", category: "Shops", description: "Camping and hiking gear", review: "Well-stocked.", ratingQuality: 5, ratingService: 4, ratingValue: 5 },
    ],
    services: [
        { businessName: "Laundry Service", category: "Services", description: "Quick and affordable", review: "Fast service.", ratingQuality: 5, ratingService: 5, ratingValue: 5 },
        { businessName: "Plumbing Experts", category: "Services", description: "Fixes any plumbing issue", review: "Great service.", ratingQuality: 5, ratingService: 4, ratingValue: 4 },
        { businessName: "Cleaning Solutions", category: "Services", description: "Professional cleaning", review: "Spotless job.", ratingQuality: 4, ratingService: 5, ratingValue: 5 },
        { businessName: "Repair Masters", category: "Services", description: "Electronics repair", review: "Fast and reliable.", ratingQuality: 4, ratingService: 4, ratingValue: 4 },
        { businessName: "Moving Company", category: "Services", description: "Efficient moving service", review: "Hassle-free move.", ratingQuality: 5, ratingService: 5, ratingValue: 4 },
    ],
};

const BusinessRatingPage = () => {
    const [reviews, setReviews] = useState(initialReviews);
    const [newReviews, setNewReviews] = useState({
        restaurant: Array(5).fill({ businessName: "", description: "", review: "", ratingQuality: 0, ratingService: 0, ratingValue: 0 }),
        shops: Array(5).fill({ businessName: "", description: "", review: "", ratingQuality: 0, ratingService: 0, ratingValue: 0 }),
        services: Array(5).fill({ businessName: "", description: "", review: "", ratingQuality: 0, ratingService: 0, ratingValue: 0 }),
    });
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    const handleAccordionToggle = (category) => {
        setExpandedAccordion(expandedAccordion === category ? null : category);
    };

    const handleInputChange = (category, index, e) => {
        const { name, value } = e.target;
        const updatedCategoryReviews = [...newReviews[category]];
        updatedCategoryReviews[index] = { ...updatedCategoryReviews[index], [name]: value };
        setNewReviews({ ...newReviews, [category]: updatedCategoryReviews });
    };

    const handleSubmit = (category, index, e) => {
        e.preventDefault();
        const updatedReviews = { ...reviews };
        updatedReviews[category].push(newReviews[category][index]);
        setReviews(updatedReviews);
        const resetReview = { businessName: "", description: "", review: "", ratingQuality: 0, ratingService: 0, ratingValue: 0 };
        const updatedNewReviews = [...newReviews[category]];
        updatedNewReviews[index] = resetReview;
        setNewReviews({ ...newReviews, [category]: updatedNewReviews });
    };

    const categories = ["restaurant", "shops", "services"];

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-100">
            <h1 className="text-3xl font-bold text-center mb-6">Business Rating Page</h1>

            {/* Give Rating Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Give Rating</h2>
                {categories.map((category) => (
                    <div key={category} className="mb-4">
                        <button
                            className="w-full text-left text-lg font-medium text-white bg-blue-500 p-2 rounded-md"
                            onClick={() => handleAccordionToggle(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                        {expandedAccordion === category && (
                            <div className="bg-white p-4 mt-2 rounded-md shadow-md">
                                {[...Array(5)].map((_, index) => (
                                    <form key={index} onSubmit={(e) => handleSubmit(category, index, e)} className="mb-4">
                                        <h3 className="text-xl font-semibold mb-2">Business {index + 1}</h3>
                                        <div className="mb-2">
                                            <label className="block text-sm font-medium text-gray-700">Business Name:</label>
                                            <input
                                                type="text"
                                                name="businessName"
                                                value={newReviews[category][index].businessName}
                                                onChange={(e) => handleInputChange(category, index, e)}
                                                required
                                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="mb-2">
                                            <label className="block text-sm font-medium text-gray-700">Description:</label>
                                            <textarea
                                                name="description"
                                                value={newReviews[category][index].description}
                                                onChange={(e) => handleInputChange(category, index, e)}
                                                required
                                                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Quality:</label>
                                                <input
                                                    type="number"
                                                    name="ratingQuality"
                                                    value={newReviews[category][index].ratingQuality}
                                                    onChange={(e) => handleInputChange(category, index, e)}
                                                    min="1"
                                                    max="5"
                                                    required
                                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Service:</label>
                                                <input
                                                    type="number"
                                                    name="ratingService"
                                                    value={newReviews[category][index].ratingService}
                                                    onChange={(e) => handleInputChange(category, index, e)}
                                                    min="1"
                                                    max="5"
                                                    required
                                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Value:</label>
                                                <input
                                                    type="number"
                                                    name="ratingValue"
                                                    value={newReviews[category][index].ratingValue}
                                                    onChange={(e) => handleInputChange(category, index, e)}
                                                    min="1"
                                                    max="5"
                                                    required
                                                    className="mt-1 w-full p-2 border border-gray-300 rounded-md"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                            Submit Rating
                                        </button>
                                    </form>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* View Ratings Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">View Ratings</h2>
                {categories.map((category) => (
                    <div key={category} className="mb-4">
                        <h3 className="text-lg font-medium text-gray-800 mb-2">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h3>
                        <div className="bg-white p-4 rounded-md shadow-md">
                            {reviews[category].map((review, index) => (
                                <div key={index} className="mb-4 border-b border-gray-300 pb-4">
                                    <h4 className="text-xl font-semibold mb-1">{review.businessName}</h4>
                                    <p className="text-sm text-gray-600 mb-1">Description: {review.description}</p>
                                    <p className="text-sm text-gray-600 mb-1">Review: {review.review}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <p className="text-sm text-gray-600">Quality Rating: {review.ratingQuality}/5</p>
                                        <p className="text-sm text-gray-600">Service Rating: {review.ratingService}/5</p>
                                        <p className="text-sm text-gray-600">Value Rating: {review.ratingValue}/5</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessRatingPage;