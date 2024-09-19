import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyFlights from './pages/MyFlights';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar bileşeni */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-flights" element={<MyFlights />} />
      </Routes>
    </Router>
  );
}

export default App;

