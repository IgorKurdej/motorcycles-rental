import React, {useContext, useState} from 'react';
import AppContext from "./context";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./views/Home";
import Offer from "./views/Offer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login";
import Booking from "./views/Booking";
import Account from "./views/Account";
import Contact from "./views/Contact";
import ProtectedRoutesForUnlogged from "./ProtectedRoutesForUnlogged";
import ProtectedRoutesForLogged from "./ProtectedRoutesForLogged";

function App() {
  return (
      <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/oferta" element={<Offer />}/>
                  <Route path="/kontakt" element={<Contact />}/>
                  <Route element={<ProtectedRoutesForUnlogged />}>
                      <Route path="/rezerwacja" element={<Booking />} />
                      <Route path="/konto" element={<Account />}/>
                  </Route>
                  <Route element={<ProtectedRoutesForLogged />}>
                    <Route path="/logowanie" element={<Login />}/>
                  </Route>
          </Routes>
      </Router>
  );
}

export default App;