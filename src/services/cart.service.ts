import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
  
export class CartService {

  private shoppingCart: Product[] = []
  private _products: BehaviorSubject<Product[]>;

  constructor() {
    this._products = new BehaviorSubject<Product[]>([])
    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage(): void {
    const cart = localStorage.getItem('shoppingCart');
    if (cart) {
      this.shoppingCart = JSON.parse(cart);
      this._products.next(this.shoppingCart);
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
  }
  
  get allProducts() {
    return this._products.asObservable()
  }
  
  isInCart(product: Product): boolean {
    return this.shoppingCart.includes(product)
  }

  actionsOnCart(product: Product) {
    if (!this.shoppingCart.includes(product)) {
      this.shoppingCart.push(product);
    } else {
      this.shoppingCart = this.shoppingCart.filter(prod => prod.id !== product.id);
    }
    this.saveCartToLocalStorage(); // Guardar el carrito en LocalStorage
    this._products.next(this.shoppingCart);
  }

  actionsOnCantToBy(id: number, cant: number) {
    this.shoppingCart.find(
      product => {
        if (product.id === id) {
          if (product.cant === 1 && cant === -1) return
          product.cant += cant
        }
      }
    )
    this.saveCartToLocalStorage();
    this._products.next(this.shoppingCart)
  }

  totalAmount(): string {
    return this.shoppingCart.reduce(
      (prev, curr) => prev + curr.price * curr.cant, 0
    ).toFixed(2)
  }

  removeProductById(id: number) {
    this.shoppingCart = this.shoppingCart.filter(prod => prod.id !== id);
    this.saveCartToLocalStorage(); // Guardar el carrito en LocalStorage
    this._products.next(this.shoppingCart);
  }

  cleanCart() {
    this.shoppingCart = [];
    this.saveCartToLocalStorage(); // Guardar el carrito en LocalStorage
    this._products.next(this.shoppingCart);
  }

}