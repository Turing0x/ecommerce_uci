import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './components/details/details.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: '**', redirectTo: 'list' },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
  
export class ProductRoutingModule { }
