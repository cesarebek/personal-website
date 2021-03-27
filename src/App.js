import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
