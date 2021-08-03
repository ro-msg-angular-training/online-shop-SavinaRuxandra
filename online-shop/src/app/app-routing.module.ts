import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailComponent } from 'src/app/views/product-detail/product-detail.component';
import { ProductListComponent } from 'src/app/views/product-list/product-list.component';
import { ShoppingCartComponent } from 'src/app/views/shopping-cart/shopping-cart.component';
import { ProductEditComponent } from 'src/app/views/product-edit/product-edit.component';
import { ProductAddComponent } from 'src/app/views/product-add/product-add.component';
import { LoginComponent } from 'src/app/views/login/login.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
  { path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
