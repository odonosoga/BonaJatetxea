import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Carousel from './components/Home/carousel';
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Header />

      {/*Main content*/}
     
        <Carousel />



      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;