import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Menu from '../legacy/components/Menu/menu.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <Menu />
      <Footer />
    </BrowserRouter>
  );
}