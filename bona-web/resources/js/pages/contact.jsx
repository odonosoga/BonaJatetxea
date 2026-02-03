import React from 'react';
import Footer from '../legacy/components/Footer/footer.jsx';
import Header from '../legacy/components/Header/header.jsx';
import Contact from '../legacy/components/Contact/contact.jsx';

// Legacy es solo una "app" que muestra una página fija (por ahora, Contact)
export default function Legacy() {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
