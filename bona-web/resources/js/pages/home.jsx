import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../legacy/components/Home/home.jsx';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}