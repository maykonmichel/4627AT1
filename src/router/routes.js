import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';

import AureaSection from '../pages/AureaSection';
import Bisection from '../pages/Bisection';
import DichotomousSearch from '../pages/DichotomousSearch';
import FibonacciSearch from '../pages/FibonacciSearch';
import Home from '../pages/Home';
import Newton from '../pages/Newton';
import UniformSearch from '../pages/UniformSearch';

const Routes = memo(() => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/busca-uniforme" exact>
            <UniformSearch />
          </Route>
          <Route path="/busca-dicotomica" exact>
            <DichotomousSearch />
          </Route>
          <Route path="/secao-aurea" exact>
            <AureaSection />
          </Route>
          <Route path="/busca-de-fibonacci" exact>
            <FibonacciSearch />
          </Route>
          <Route path="/bissecao" exact>
            <Bisection />
          </Route>
          <Route path="/newton" exact>
            <Newton />
          </Route>
        </Switch>
      </div>
    </Router>
  );
});

export default Routes;
