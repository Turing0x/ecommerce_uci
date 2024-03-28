import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { 
    path: '' ,
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'details', component: DetailsComponent },
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
