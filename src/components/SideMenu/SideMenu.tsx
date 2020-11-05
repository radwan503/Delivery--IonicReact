import {
  IonButtons,
  IonMenuButton,
  IonText,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { home, document, logOutOutline } from "ionicons/icons";
import React, { Component } from "react";

export class SideMenu extends Component {
  render() {
    return (
      <>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton menu="side-menu" color="dark"></IonMenuButton>
              <IonItem lines="none">
                <IonText className="center"></IonText>
              </IonItem>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonMenu content-id="main" menu-id="side-menu">
          <IonHeader className="ion-no-border">
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonItem routerLink="/home">
                <IonIcon icon={home} slot="start"></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
              <IonItem routerLink="/package">
                <IonIcon icon={document} slot="start"></IonIcon>
                <IonLabel>package</IonLabel>
              </IonItem>
              <IonItem routerLink="/">
                <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                <IonLabel>Logout</IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonRouterOutlet id="main"></IonRouterOutlet>
      </>
    );
  }
}

export default SideMenu;
