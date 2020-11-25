import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/Shop/shop.component"
import Header from "./components/header/header.component"

import "./App.css"


function App() {
  return (
    <div className = "App">
    <Header/>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
        <Route exact={true} path={"/shop"} component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
