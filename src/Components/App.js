import React from "react";
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home'
import PizzaForm from './PizzaForm'
import Help from './Help'

const App = () => {
  return (
    <>
      {/* Create header to splash across top of any routed location of app */}
      <header className='app-header'>
        <h1>Lambda Eats</h1>
        <nav className='nav-menu'>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/help'>
            <button>Help</button>
          </Link>
        </nav>
      </header>
      {/* Use a Switch to route to each App component. Current functionality is to get to the Pizza Order Form and Help page, but other ordering destinations can be added */}
      <Switch>
        <Route path={'/help'} >
          <Help />
        </Route>
        <Route path='/pizza' >
          <PizzaForm />
        </Route>
        <Route path='/' component = { Home }/>
      </Switch>
    </>
  );
};
export default App;
