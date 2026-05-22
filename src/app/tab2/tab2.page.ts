import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent,IonImg, IonLabel, IonButton, IonToolbar } from '@ionic/angular/standalone';
import { ProductsService, Products } from '../services/products.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonToolbar, IonButton, IonLabel, IonImg, IonCard, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, CommonModule],
})
export class Tab2Page implements OnInit{
  private productsService = inject(ProductsService);

  products: Products[] = [];
  currentIndex: number = 0;

  ngOnInit() {
    this.productsService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
      }
    });
  }

  nextProduct() {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  prevProduct() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
  }
}}
