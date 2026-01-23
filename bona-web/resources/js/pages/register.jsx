import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Register from '../legacy/components/Register/register.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <Register />
      <Footer />
    </BrowserRouter>
  );
}