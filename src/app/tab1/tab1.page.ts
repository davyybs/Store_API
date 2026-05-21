import { Component } from '@angular/core';
import { IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [ IonTitle, IonContent, IonCard, IonCardHeader, IonCardSubtitle],
})
export class Tab1Page {
  constructor() {}
}
