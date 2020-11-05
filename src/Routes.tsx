import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import AirLineTransport from "./pages/AirLineTransport/AirLineTransport";
import BusTransport from "./pages/BusTransport/BusTransport";
import CarTransport from "./pages/CarTransport/CarTransport";
import Home from "./pages/Home/Home";
import Package from "./pages/Package/Package";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/home" exact component={Home}></Route>
      <Route path="/registration" exact component={Registration}></Route>
      <Route path="/package" exact component={Package}></Route>
      <Route path="/package/truck" exact component={CarTransport}></Route>
      <Route path="/package/airline" exact component={AirLineTransport}></Route>
      <Route path="/package/bus" exact component={BusTransport}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
