import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Products from "./components/Products";
import ProductsForm from "./components/ProductsForm";
import ProductsView from "./components/ProductsView";
import { Route, Switch, } from "react-router-dom";
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/new" component={ProductsForm} />        
        <Route exact path="/products/:id" component={ProductsView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;
