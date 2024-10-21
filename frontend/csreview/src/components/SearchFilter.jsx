import React, { useState } from 'react';

const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        // Logic to filter businesses based on searchTerm and category
    };

    return (
        <form className="search-filter" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="restaurant">Restaurants</option>
                <option value="shop">Shops</option>
                <option value="service">Services</option>
            </select>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchFilter;