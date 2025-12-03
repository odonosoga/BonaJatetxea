import React from 'react';
import { Container,} from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Carousel from './components/carousel';
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