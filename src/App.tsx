import React from "react";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { Redirect, Route } from "react-router-dom";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/registration" component={Registration}></Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
