import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ShoppingCartService } from "src/app/services/shopping-cart.service";
import { LoginService } from "src/app/services/login.service"
import { AppState } from 'src/app/store/states/app.state';
import { select, Store } from '@ngrx/store';
import { AddProductToShoppingCart, DeleteProductById, GetProductById } from 'src/app/store/actions/product.actions';
import { selectSelectedProduct } from 'src/app/store/selectors/product.selectors';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  product$ = this.store.pipe(select(selectSelectedProduct));
  isEnabled?: boolean;

  constructor(private shoppingCartService: ShoppingCartService,
              private loginService: LoginService,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<AppState>) {
    }

  ngOnInit(): void {
    this.getProductById();
    this.checkIfRoleAdmin();
  }

  getProductById(): void {
    this.store.dispatch(new GetProductById(this.route.snapshot.params.id));
  }

  deleteProductById(): void {
    this.store.dispatch(new DeleteProductById(this.route.snapshot.params.id));
    this.goBack();
  }

  addToShoppingCart(): void {
    this.product$.subscribe(product => this.store.dispatch(new AddProductToShoppingCart(product)));
  }

  checkIfRoleAdmin(): void {
    const userRoles = this.loginService.currentUser.roles;
    if (userRoles.includes('admin')) {
      this.isEnabled = true;
    }
  }

  goBack(): void {
    this.location.back();
  }
}
