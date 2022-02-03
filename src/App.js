import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import GlobalStyle from "./theme/GlobalStyle";
import Home from "./views/Home";
import Offer from "./views/Offer";
import Navbar from "./components/Navbar/Navbar";
import Login from "./views/Login";
import Booking from "./views/Booking";
import Account from "./views/Account";
import AppContext from "./context";


function App() {

  return (
      <Router basename={window.location.pathname || ''} >
          <GlobalStyle />
          <Navbar />
          <Switch>
              <Route exact path="/motorcycles-rental" element={<Home />} />
              <Route path="/motorcycles-rental/oferta" element={<Offer />}/>
              <Route path="/motorcycles-rental/rezerwacja" element={<Booking />}/>
              <Route path="/motorcycles-rental/konto" element={<Account />}/>
              <Route path="/motorcycles-rental/logowanie" element={<Login />}/>
          </Switch>
      </Router>

  );
}

export default App;
