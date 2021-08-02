import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from "src/app/models/product.model"
import { ButtonType } from 'src/app/models/buttonType.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { AddProduct } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  formGroup!: FormGroup;
  buttonTypeSubmit: ButtonType = ButtonType.Submit;
  buttonTypeCancel: ButtonType = ButtonType.Cancel;

  constructor(private formBuilder: FormBuilder,
              private route: Router,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      description: new FormControl('', [Validators.minLength(10)])
    })
  }


  addProduct(): void {
    const product = <Product> {
      name: this.formGroup.controls["name"].value,
      category: this.formGroup.controls["category"].value,
      price: this.formGroup.controls["price"].value,
      image: this.formGroup.controls["image"].value,
      description: this.formGroup.controls["description"].value,
    }
    this.store.dispatch(new AddProduct(product));
    this.goBack();
  }

  cancelUpdate(): void {
    this.formGroup.reset();
    this.goBack();
  }

  onSubmit(buttonType: ButtonType): void {
    if(buttonType===ButtonType.Submit) {
      this.addProduct();
    }
    if(buttonType===ButtonType.Cancel) {
      this.cancelUpdate();
    }
  }

  goBack(): void {
    this.route.navigate(['/products']);
  }
}
