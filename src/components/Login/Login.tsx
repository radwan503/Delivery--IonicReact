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
import "../Login/Login.css";
import { personSharp, lockClosed } from "ionicons/icons";

export default class Login extends Component {
  render() {
    return (
      <IonPage>
        <IonHeader no-border>
          <div className="login-header ion-padding">
            <img
              className="logo-img"
              src={require("../../assets/pick-up.png")}
              alt="logo"
            ></img>
          </div>
        </IonHeader>
        <IonContent>
          <div className="login-form">
            <IonGrid>
              <IonRow>
                <IonCol class="ion-padding-top ion-margin-start">
                  <div className="ion-text-left">
                    <IonLabel>
                      <IonText>
                        <h1>Sign In</h1>
                        <h6>Sign in with your email and password</h6>
                      </IonText>
                    </IonLabel>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol class="ion-padding-top">
                  <IonItem>
                    <IonIcon slot="start" icon={personSharp}></IonIcon>
                    <IonInput type="email" placeholder="Enter Email"></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonIcon slot="start" icon={lockClosed}></IonIcon>
                    <IonInput
                      type="password"
                      placeholder="Enter Password"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow class="ion-align-items-center">
                <IonCol>
                  <div className="ion-text-right">
                    <IonLabel className="forget-password">
                      Forget Password?
                    </IonLabel>
                  </div>
                  <IonButton
                    color="primary"
                    className="ion-button-class"
                    shape="round"
                    fill="solid"
                    size="large"
                    expand="block"
                  >
                    Sign in
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <div className="ion-text-center">
                    <IonText>
                      Don't have an account?
                      <span className="link-button">
                        <IonRouterLink color="warning" href="/registration">
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
