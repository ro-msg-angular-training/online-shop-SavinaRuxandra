import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from 'src/app/views/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/views/product-list/product-list.component';
import { ShoppingCartComponent } from 'src/app/views/shopping-cart/shopping-cart.component';
import { ProductEditComponent } from 'src/app/views/product-edit/product-edit.component';
import { ProductAddComponent } from 'src/app/views/product-add/product-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'add', component: ProductAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
