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
import ProtectedRoutesForUnlogged from "./ProtectedRoutes/ProtectedRoutesForUnlogged";
import ProtectedRoutesForLoggedUser from "./ProtectedRoutes/ProtectedRoutesForLoggedUser";
import Reservations from "./views/Reservations";
import Users from "./views/Users";
import Motorcycles from "./views/Motorcycles";
import FormMotorcycle from "./components/FormMotorcycle/FormMotorcycle";

function App() {
  return (
      <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/oferta" element={<Offer />}/>
              <Route path="/kontakt" element={<Contact />}/>
              {
                  sessionStorage.length &&
                      JSON.parse(sessionStorage.getItem('user')).role === 'user' ? (
                          <Route element={<ProtectedRoutesForUnlogged />}>
                              <Route path="/rezerwacja" element={<Booking />} />
                              <Route path="/user" element={<Account />}/>
                              <Route path="/rezerwacje" element={<Reservations />}/>
                          </Route>
                      ) : (
                          <Route element={<ProtectedRoutesForUnlogged />}>
                              <Route path='/users' element={<Users />} />
                              <Route path='/motorcycles' element={<Motorcycles />} />
                              <Route path='/motorcycle' element={<FormMotorcycle />} />
                          </Route>
                      )
              }
              <Route element={<ProtectedRoutesForLoggedUser />}>
                <Route path="/logowanie" element={<Login />}/>
              </Route>
          </Routes>
      </Router>
  );
}

export default App;