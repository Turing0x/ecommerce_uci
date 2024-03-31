import { Component, Input } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'custom-main-container',
  templateUrl: './main_container.component.html',
  styleUrls: ['./main_container.component.css'],
})
  
export class MainContainerComponent {

  @Input() product_list: Product[] = [];

  constructor(
    private cartService: CartService
  ) { }
  
  onClick(product: Product) {
    this.cartService.actionsOnCart(product)
  }

  isInCart(product: Product): boolean {
    return this.cartService.isInCart(product)
  }

}
