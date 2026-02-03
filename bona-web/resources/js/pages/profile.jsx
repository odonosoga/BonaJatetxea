import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Profile from '../legacy/components/Profile/profile.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
      <Header />
        <Profile />
      <Footer />
    </BrowserRouter>
  );
}