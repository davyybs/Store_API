import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonContent, CommonModule],
})
export class Tab3Page implements OnInit {
   private productsService = inject(ProductsService);

  products$!: Observable<any>;

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

}
