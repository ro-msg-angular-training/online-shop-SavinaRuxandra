import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "src/app/models/product.model"
import { ProductService } from "src/app/services/product.service"
import { ButtonType } from 'src/app/models/buttonType.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  formGroup!: FormGroup;
  product!: Product;
  buttonTypeSubmit: ButtonType = ButtonType.Submit;
  buttonTypeCancel: ButtonType = ButtonType.Cancel;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) { }

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
    this.formGroup.controls["id"].setValue(this.product.id);
    this.formGroup.controls["name"].setValue(this.product.name);
    this.formGroup.controls["category"].setValue(this.product.category);
    this.formGroup.controls["price"].setValue(this.product.price);
    this.formGroup.controls["image"].setValue(this.product.image);
    this.formGroup.controls["description"].setValue(this.product.description);
  }

  getProductAndPopulateForm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
        this.productService.getProductById(id)
            .subscribe(product => this.product = product);
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
    this.productService.updateProduct(this.product.id, newProduct)
        .subscribe(() => this.goBack());
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
