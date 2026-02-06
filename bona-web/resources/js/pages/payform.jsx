import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import PayForm from '../legacy/components/PayForm/payform.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <PayForm />
      <Footer />
    </BrowserRouter>
  );
}