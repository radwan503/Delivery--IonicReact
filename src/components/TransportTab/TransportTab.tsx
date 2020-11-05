import {
  IonIcon,
  IonLabel,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonContent,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { carSportOutline, paperPlaneOutline, busOutline } from "ionicons/icons";
import React, { Component } from "react";
import { Redirect, Route } from "react-router";
import AirLineTransport from "../../pages/AirLineTransport/AirLineTransport";
import BusTransport from "../../pages/BusTransport/BusTransport";
import CarTransport from "../../pages/CarTransport/CarTransport";

export class TransportTab extends Component {
  render() {
    return (
      <>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/car" component={CarTransport} />
              <Route path="/airline" component={AirLineTransport} />
              <Route path="/bus" component={BusTransport} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="car" href="/car">
                <IonIcon icon={carSportOutline}></IonIcon>
                <IonLabel>Car</IonLabel>
              </IonTabButton>
              <IonTabButton tab="airline" href="/airline">
                <IonIcon icon={paperPlaneOutline}></IonIcon>
                <IonLabel>Airline</IonLabel>
              </IonTabButton>
              <IonTabButton tab="bus" href="/bus">
                <IonIcon icon={busOutline}></IonIcon>
                <IonLabel>Bus</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </>
    );
  }
}

export default TransportTab;
