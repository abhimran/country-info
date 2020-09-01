import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/country/:name">
            <CountryDetail></CountryDetail>
        </Route>
        <Route path="/home">
            <Home></Home>
        </Route>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="*">
             <Nomatch></Nomatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
