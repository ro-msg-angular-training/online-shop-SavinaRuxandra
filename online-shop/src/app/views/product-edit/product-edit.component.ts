import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "src/app/models/product.model"
import { ButtonType } from 'src/app/models/buttonType.model';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { selectSelectedProduct } from 'src/app/store/selectors/product.selectors';
import { GetProductById, UpdateProduct } from 'src/app/store/actions/product.actions';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  formGroup!: FormGroup;
  product$ = this.store.pipe(select(selectSelectedProduct));
  buttonTypeSubmit: ButtonType = ButtonType.Submit;
  buttonTypeCancel: ButtonType = ButtonType.Cancel;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private location: Location,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.createForm();
    this.getProductAndPopulateForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      description: new FormControl('', [Validators.minLength(10)])
    })

    this.formGroup.controls['id'].disable();
  }

  populateForm(): void {
    this.product$.subscribe(product => {
      this.formGroup.controls["id"].setValue(product.id);
      this.formGroup.controls["name"].setValue(product.name);
      this.formGroup.controls["category"].setValue(product.category);
      this.formGroup.controls["price"].setValue(product.price);
      this.formGroup.controls["image"].setValue(product.image);
      this.formGroup.controls["description"].setValue(product.description);
    })
  }

  getProductAndPopulateForm(): void {
    this.store.dispatch(new GetProductById(this.route.snapshot.params.id));
    setTimeout(() => this.populateForm());
  }

  updateProduct(): void {
    const newProduct = <Product> {
      id: this.formGroup.controls["id"].value,
      name: this.formGroup.controls["name"].value,
      category: this.formGroup.controls["category"].value,
      price: this.formGroup.controls["price"].value,
      image: this.formGroup.controls["image"].value,
      description: this.formGroup.controls["description"].value,
    }
    this.store.dispatch(new UpdateProduct(newProduct));
    this.goBack();
  }

  cancelUpdate(): void {
    this.formGroup.reset();
    this.goBack();
  }

  onSubmit(buttonType: ButtonType): void {
    if(buttonType===ButtonType.Submit) {
      this.updateProduct();
    }
    if(buttonType===ButtonType.Cancel) {
      this.cancelUpdate();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
