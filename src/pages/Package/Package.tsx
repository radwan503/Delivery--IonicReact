import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonHeader,
  IonTitle,
  IonFooter,
  IonToolbar,
  IonText,
} from "@ionic/react";
import React, { Component } from "react";
import SideMenu from "../../components/SideMenu/SideMenu";
import TrendingList from "../../components/TrendingList/TrendingList";
import "../Package/Package.css";

export class Package extends Component {
  render() {
    return (
      <IonPage>
        <SideMenu></SideMenu>
        <IonContent className="ion-padding-top">
          <IonGrid>
            <IonRow>
              <IonCol size="4">
                <IonCard
                  className="account-status primary"
                  href="/package/truck"
                >
                  <IonCardContent color="light">
                    <img
                      className="custom-img-size"
                      src={require("../../assets/delivery-truck.png")}
                      alt="truck"
                    ></img>
                  </IonCardContent>
                </IonCard>
              </IonCol>

              <IonCol size="4">
                <IonCard
                  className="account-status primary"
                  href="/package/airline"
                >
                  <IonCardContent color="light">
                    <img
                      className="custom-img-size"
                      src={require("../../assets/takeoff.png")}
                      alt="truck"
                    ></img>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              <IonCol size="4">
                <IonCard className="account-status primary" href="/package/bus">
                  <IonCardContent color="light">
                    <img
                      className="custom-img-size"
                      src={require("../../assets/bus.png")}
                      alt="truck"
                    ></img>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonHeader className="ion-no-border">
                  <IonTitle>Trending</IonTitle>
                </IonHeader>
                <TrendingList></TrendingList>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonFooter className="ion-no-border">
            <IonToolbar>
              <div className="footer">
                <IonText className="text-center" color="light">
                  <p>@Copy-right 2020 By Radwan Ahmed</p>
                </IonText>
                <svg
                  className="waves"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#f2f2f2"
                    fillOpacity="1"
                    d="M0,160L40,165.3C80,171,160,181,240,160C320,139,400,85,480,58.7C560,32,640,32,720,64C800,96,880,160,960,160C1040,160,1120,96,1200,69.3C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </IonToolbar>
          </IonFooter>
        </IonContent>
      </IonPage>
    );
  }
}

export default Package;
