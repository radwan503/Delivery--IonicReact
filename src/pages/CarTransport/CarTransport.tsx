import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonDatetime,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import React, { Component } from "react";
import "../CarTransport/CarTransport.css";

export class CarTransport extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader className="ion-no-border">
          <IonToolbar>
            <div className="header-top-bg">
              <IonButtons slot="start">
                <IonBackButton defaultHref="/package">
                  <IonIcon icon={chevronBack}></IonIcon>
                </IonBackButton>
                <IonText>
                  <IonLabel>
                    <h1>Truck Package</h1>
                  </IonLabel>
                </IonText>
              </IonButtons>
              <svg
                className="wavestop"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fff"
                  fillOpacity="1"
                  d="M0,96L40,112C80,128,160,160,240,160C320,160,400,128,480,128C560,128,640,160,720,197.3C800,235,880,277,960,272C1040,267,1120,213,1200,202.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
              </svg>
            </div>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div className="content-bg">
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonText color="dark">
                    <IonLabel>Preference for Transport</IonLabel>
                  </IonText>
                </IonCol>
              </IonRow>
              <div className="transport-form">
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="custom-input">
                      <IonLabel position="floating">Starting Location</IonLabel>
                      <IonInput type="text"></IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol size="12">
                    <IonItem lines="none" className="custom-input">
                      <IonLabel position="floating">Form Date</IonLabel>
                      <IonDatetime displayFormat="DD/MM/YYYY"></IonDatetime>
                    </IonItem>
                  </IonCol>
                  <IonCol size="12">
                    <IonItem lines="none" className="custom-input">
                      <IonLabel position="floating">End Location</IonLabel>
                      <IonInput type="text"></IonInput>
                    </IonItem>
                  </IonCol>
                  <IonCol size="12">
                    <IonItem lines="none" className="custom-input">
                      <IonLabel position="floating">To Date</IonLabel>
                      <IonDatetime displayFormat="DD/MM/YYYY"></IonDatetime>
                    </IonItem>
                  </IonCol>
                  <IonCol size="12">
                    <IonList>
                      <IonItem lines="none" className="custom-input">
                        <IonLabel position="floating">Product Type</IonLabel>
                        <IonSelect>
                          <IonSelectOption value="home-supplies">
                            Home Supplies
                          </IonSelectOption>
                          <IonSelectOption value="food-supplies">
                            Food Supplies
                          </IonSelectOption>
                          <IonSelectOption value="construction-supplies">
                            Construction Supplies
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </IonCol>
                  <IonCol size="12">
                    <IonList>
                      <IonItem lines="none" className="custom-input">
                        <IonLabel position="floating">Truck Size</IonLabel>
                        <IonSelect>
                          <IonSelectOption value="mini-truck">
                            Mini Trcuk(5 Ton)
                          </IonSelectOption>
                          <IonSelectOption value="medium-truck">
                            Medium Truck(15 Ton)
                          </IonSelectOption>
                          <IonSelectOption value="large-truck">
                            Large Truck(More Then 15 Ton)
                          </IonSelectOption>
                        </IonSelect>
                      </IonItem>
                    </IonList>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="ion-text-right">
                    <IonButton className="submit-btn" type="submit">
                      Submit
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow className="truck-type">
                  <IonCol size="4">
                    <IonCard
                      className="account-status primary"
                      href="/package/truck"
                    >
                      <IonCardContent color="light">
                        <img
                          className="custom-img-size"
                          src={require("../../assets/food-delivery.png")}
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
                          alt="airline"
                        ></img>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size="4">
                    <IonCard
                      className="account-status primary"
                      href="/package/bus"
                    >
                      <IonCardContent color="light">
                        <img
                          className="custom-img-size"
                          src={require("../../assets/bus.png")}
                          alt="bus"
                        ></img>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </div>
            </IonGrid>
          </div>

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

export default CarTransport;
