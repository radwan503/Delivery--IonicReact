import {
  IonContent,
  IonItem,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import React, { Component } from "react";
import AirlinePieChart from "../../components/AirlinePieChart/AirlinePieChart";
import DailyData from "../../components/DailyData/DailyData";
import SideMenu from "../../components/SideMenu/SideMenu";
import TruckBarData from "../../components/TruckBarData/TruckBarData";
import "../Home/Home.css";

export class Home extends Component {
  render() {
    return (
      <IonPage>
        <SideMenu></SideMenu>
        <IonContent className="ion-padding-top">
          <IonGrid>
            <IonRow>
              <IonCol className="product-title">
                <IonItem lines="none">
                  <IonText>
                    <h1>Dashboard</h1>
                  </IonText>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="6">
                <IonCard className="transport-status primary">
                  <IonCardHeader>
                    <IonCardSubtitle color="light">Total</IonCardSubtitle>
                    <IonCardTitle color="light">200</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="transport-status info">
                  <IonCardHeader>
                    <IonCardSubtitle color="light">Bus</IonCardSubtitle>
                    <IonCardTitle color="light">50</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="transport-status warning">
                  <IonCardHeader>
                    <IonCardSubtitle color="light">Airline</IonCardSubtitle>
                    <IonCardTitle color="light">2</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
              <IonCol size="6">
                <IonCard className="transport-status danger">
                  <IonCardHeader>
                    <IonCardSubtitle color="light">Truck</IonCardSubtitle>
                    <IonCardTitle color="light">150</IonCardTitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonCard>
                  <IonCardHeader className="ion-text-center">
                    <IonCardTitle color="danger">
                      <h1>$4800.00</h1>
                    </IonCardTitle>
                    <IonCardSubtitle color="dark">
                      Total Balance
                    </IonCardSubtitle>
                  </IonCardHeader>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="transport-title">
                <IonCard>
                  <IonCardContent>
                    <DailyData></DailyData>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol size="12" size-sm="6">
                <IonCard>
                  <IonCardTitle class="ion-margin-start">
                    <h1>Truck Bar</h1>
                  </IonCardTitle>
                  <IonCardContent>
                    <TruckBarData></TruckBarData>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="12" size-sm="6">
                <IonCard>
                  <IonCardTitle class="ion-margin-start">
                    <h1>Airline Pie</h1>
                  </IonCardTitle>
                  <IonCardContent>
                    <AirlinePieChart></AirlinePieChart>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
