import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
  
export class ShoppingCartComponent implements OnInit {
  
  public product_list: Product[] = [];

  constructor(
    private cartService: CartService
  ){}
  
  ngOnInit(): void {
    this.cartService.allProducts.subscribe(
      list => this.product_list = list
    )
  }

  actionsOnCantToBy(id: number, cant: number) {
    this.cartService.actionsOnCantToBy(id, cant)
  }

  removeProductById(id: number) {
    this.cartService.removeProductById(id)
  }

  totalAmount(): string {
    return this.cartService.totalAmount()
  }

  cleanCart() {
    this.cartService.cleanCart()
  }

}