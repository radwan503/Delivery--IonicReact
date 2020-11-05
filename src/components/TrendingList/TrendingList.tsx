import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";
import React, { Component } from "react";

export class TrendingList extends Component {
  render() {
    return (
      <IonList>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={require("../../assets/bus.png")} alt="item" />
              </IonAvatar>
              <IonLabel>
                <h2>Han</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={require("../../assets/takeoff.png")} alt="item" />
              </IonAvatar>
              <IonLabel>
                <h2>Han</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={require("../../assets/pick-up.png")} alt="item" />
              </IonAvatar>
              <IonLabel>
                <h2>Han</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img src={require("../../assets/home.png")} alt="item" />
              </IonAvatar>
              <IonLabel>
                <h2>Han</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonItem lines="none">
              <IonAvatar slot="start">
                <img
                  src={require("../../assets/food-delivery.png")}
                  alt="item"
                />
              </IonAvatar>
              <IonLabel>
                <h2>Han</h2>
                <h3>Look, kid...</h3>
                <p>I've got enough on my plate as it is, and I...</p>
              </IonLabel>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonList>
    );
  }
}

export default TrendingList;
