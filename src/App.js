import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
import Project from './pages/Project';
import ScrollTop from './components/ScrollTop';
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/portfolio' exact>
            <Portfolio />
          </Route>
          <Route path='/portfolio/:id'>
            <Project />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </AnimatePresence>
      <ScrollTop />
    </>
  );
}

export default App;
