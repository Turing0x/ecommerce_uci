import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Not404ComponentComponent } from 'src/shared/not-404-component/not-404-component.component';

const routes: Routes = [
  { 
    path: 'auth',
    loadChildren: () => 
      import('./auth/auth.module')
        .then( m => m.AuthModule )
  },
  { 
    path: 'products',
    loadChildren: () => 
      import('./product/product.module')
        .then( m => m.ProductModule )
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: Not404ComponentComponent
  },
  {
    path: '**', redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
