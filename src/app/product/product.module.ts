import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { IonicModule } from '@ionic/angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContainerComponent } from './components/main_container/main_container.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    ProductRoutingModule,
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule
  ],
  declarations: [
    MainContainerComponent,
    ProductListComponent,
    DetailsComponent,
    NavbarComponent
  ],
})

export class ProductModule { }
