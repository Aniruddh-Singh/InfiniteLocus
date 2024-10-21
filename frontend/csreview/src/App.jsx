import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BusinessList from './components/BusinessList';
import BusinessProfile from './components/BusinessProfile';
import SubmitReview from './components/SubmitReview';
import BusinessRatingPage from './components/ReviewForm';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/review" element={<BusinessRatingPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        {/* <Route path="/submit-review/:id" element={<SubmitReview />} /> */}
      </Routes>
    </Router>
  );
}

export default App;