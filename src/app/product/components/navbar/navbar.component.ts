import { Component } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { MenuService } from 'src/services/menu.service';

@Component({
  selector: 'custom_navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent { 

  constructor(
    private menuService: MenuService,
    private cartService: CartService
  ) { }
  
  saveRoute(path: string, id: string) {
    this.menuService.setLastPath(path)
    this.menuService.setActiveMenu(id);
  }

  logout() {
    localStorage.removeItem('shoppingCart')
    localStorage.removeItem('lastPath')
    localStorage.removeItem('activeMenu')
    this.cartService.cleanCart()
  }

}
