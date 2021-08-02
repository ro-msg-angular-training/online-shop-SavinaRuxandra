import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { Observable } from 'rxjs';

import { Product } from "src/app/models/product.model"
import { LoginService } from "src/app/services/login.service"
import { selectProductList } from 'src/app/store/selectors/product.selectors';
import { GetProducts } from 'src/app/store/product.actions';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$!: Observable<Product[]>;
  isEnabled?: boolean;

  constructor(private loginService: LoginService,
              private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new GetProducts());
    this.getProducts();
    this.setIsEnabled();
  }

  getProducts(): void {
    this.products$ = this.store.pipe(select(selectProductList));
  }

  setIsEnabled(): void {
    const userRoles = this.loginService.currentUser.roles;
    if (userRoles.find(role => role === 'admin') != undefined) {
      this.isEnabled = true;
    }
  }
}
