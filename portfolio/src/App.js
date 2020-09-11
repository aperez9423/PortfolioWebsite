import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from "react-router-dom";

import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

import styled from 'styled-components';

function App() {
  return (
      <Router>
        <NavBar />
        <Title>Angelica's Web Development Portfolio</Title>
        <AboutPage/>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/contact'>
            <ContactPage/>
          </Route>
          <Route path='/projects'>
            <Projects/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
`