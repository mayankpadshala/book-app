import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/browse'>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
