import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import { Switch, Route } from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Shop from './component/Shop';





function App() {
  return (
    <>
        <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products/" component={Products } />
        <Route exact path="/Shop" component={Shop } />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
