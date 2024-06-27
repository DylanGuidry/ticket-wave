import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage'; 
import Attractions from './pages/attractions';
import Footer from './components/footer'
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;