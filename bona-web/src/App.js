// App.js
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Reserva from './components/Reservations/reservation';
import Register from './components/Register/register';
import Schedule from './components/Schedule/Schedule';
import Menu from './components/Menu/menu';
import Pd from './components/PendingDelivery/pendingdelivery';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/BonaJatetxea" element={<Home />}/>
          <Route path="/kontaktua" element={<Contact />} />
          <Route path="/erreserbak" element={<Reserva />} />
          <Route path="/erregistroa" element={<Register />} />
          <Route path="/menu" element={<Menu />}/>
          <Route path="/pendiente" element={<Pd />}/>
          <Route path="/ordutegia" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;
