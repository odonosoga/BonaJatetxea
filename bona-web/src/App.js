import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Carousel from './components/Home/carousel';
import Contact from './components/Contact/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main className="pb-5">
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/kontaktua" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
