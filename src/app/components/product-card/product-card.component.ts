import { Component, input } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-product-card',
  imports: [NgOptimizedImage],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  productTitle = input('');
  productPrice = input<number>();
  productImage = input('');
}
