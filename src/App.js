import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./views/Home";
import Offer from "./views/Offer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login";
import Booking from "./views/Booking";
import Account from "./views/Account";
import AppContext from "./context";
import Contact from "./views/Contact";


function App() {

  return (
      <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/oferta" element={<Offer />}/>
              <Route path="/rezerwacja" element={<Booking />}/>
              <Route path="/kontakt" element={<Contact />} />
              <Route path="/konto" element={<Account />}/>
              <Route path="/logowanie" element={<Login />}/>
          </Routes>
      </Router>

  );
}

export default App;
