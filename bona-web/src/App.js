import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontaktua" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
