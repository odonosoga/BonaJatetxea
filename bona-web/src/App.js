import React from 'react';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
<<<<<<< Updated upstream
import Carousel from './components/Home/carousel';
=======
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Reserva from './components/Reservations/reservation';
import Register from './components/Register/register';
import Menu from './components/Menu/menu';
import PendingDeliverys from './components/PendingDelivery/pendingdelivery';


>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Header />
<<<<<<< Updated upstream

      {/*Main content*/}
     
        <Carousel />



      {/* Footer */}
=======
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/kontaktua" element={<Contact />} />
          <Route path="/erreserbak" element={<Reserva />} />
          <Route path="/erregistroa" element={<Register />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/pending-deliverys" element={<PendingDeliverys />} />
        </Routes>
      </main>
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}

export default App;