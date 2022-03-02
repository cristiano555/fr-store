import React, { Fragment, FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './helpers/styles';
import Header from './components/Header/Header'
import AboutUs from './pages/AboutUs'
import Offer from './pages/Offer'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Register from './pages/Register/Register'
import Login from './components/Login/Login'

const App:FC = () => {
  return (
    <>
      <GlobalStyle/>
      <Router>
          <Header/>      
          <Switch>
            <Route exact path="/">
              <AboutUs />
              <Offer />
              <Contact />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer/>    
      </Router> 
    </>
  );
}

export default App;
