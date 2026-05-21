import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonContent],
})
export class Tab2Page {
  constructor() {}
}
