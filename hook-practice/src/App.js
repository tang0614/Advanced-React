import React from "react";
import Header from "./components/header";
import Cart from "./route/cart";
import { Route, Switch } from "react-router-dom";
import Photo from "./route/photo";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Photo />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
