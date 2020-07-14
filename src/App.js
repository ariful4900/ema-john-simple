import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Shop></Shop>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
