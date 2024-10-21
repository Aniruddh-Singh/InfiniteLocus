import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';
import Login from './LoginForm.jsx';


const BusinessList = () => {
  const [businesses, setBusinesses] = useState(["aniruddh", "aman"]);

  return (
    <>
      <div className="container">
        {/* <SearchFilter /> */}
        <Login />
      </div >
    </>
  );
};

export default BusinessList;