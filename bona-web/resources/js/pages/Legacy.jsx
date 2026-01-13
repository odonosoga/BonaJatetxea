import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../legacy/App.jsx';

export default function Legacy() {
  return (
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  );
}
