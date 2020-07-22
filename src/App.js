import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Header from './components/Header/Header';
import Shop from './Pages/Shop/Shop';
import Review from './Pages/Review/Review';
import Inventory from './Pages/Inventory/Inventory';
import NotFound from './Pages/NotFound/NotFound';
import ProductDetails from './components/ProductDetail/ProductDetails';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/shop">
          <Shop></Shop>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/inventory">
          <Inventory></Inventory>
        </Route>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails></ProductDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
