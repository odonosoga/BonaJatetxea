import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Reserva from '../legacy/components/Reservations/reservation.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
        <Header />
      <Reserva />
      <Footer />
    </BrowserRouter>
  );
}