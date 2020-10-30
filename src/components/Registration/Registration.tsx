import React, { Component } from "react";
import {
  IonContent,
  IonItem,
  IonButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonRouterLink,
  IonText,
  IonHeader,
  IonIcon,
  IonInput,
  IonItemDivider,
  IonPage,
} from "@ionic/react";
import "../../components/Registration/Registration.css";
import { personSharp, lockClosed, mailOpenOutline } from "ionicons/icons";

export class Registration extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader no-border>
          <div className="registration-header ion-padding">
            <img
              className="logo-img"
              src={require("../../assets/pick-up.png")}
              alt="logo"
            ></img>
          </div>
        </IonHeader>
        <IonContent>
          <div className="registration-form">
            <IonGrid>
              <IonRow>
                <IonCol class="ion-padding-top ion-margin-start">
                  <div className="ion-text-left">
                    <IonLabel>
                      <IonText>
                        <h1>Sign Up</h1>
                      </IonText>
                    </IonLabel>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="ion-padding-top">
                  <IonItem>
                    <IonIcon slot="start" icon={personSharp}></IonIcon>
                    <IonInput
                      type="text"
                      placeholder="Enter Your Name"
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonIcon slot="start" icon={mailOpenOutline}></IonIcon>
                    <IonInput
                      type="email"
                      placeholder="Enter Your Email"
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonIcon slot="start" icon={lockClosed}></IonIcon>
                    <IonInput
                      type="password"
                      placeholder="Enter Your Password"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow class="ion-align-items-center">
                <IonCol>
                  <IonButton
                    color="primary"
                    className="ion-button-class"
                    shape="round"
                    fill="solid"
                    size="large"
                    expand="block"
                  >
                    Sign up
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="ion-text-center">
                    <IonText>
                      Already have an account?
                      <span className="link-button">
                        <IonRouterLink color="warning" href="/">
                          Sign In
                        </IonRouterLink>
                      </span>
                    </IonText>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </IonContent>
      </IonPage>
    );
  }
}

export default Registration;
