import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../legacy/components/Home/home.jsx';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Schedule from '../legacy/components/Schedule/Schedule.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <Schedule />
      <Footer />
    </BrowserRouter>
  );
}