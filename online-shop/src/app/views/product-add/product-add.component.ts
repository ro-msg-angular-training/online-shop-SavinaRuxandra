import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "src/app/models/product.model"
import { ProductService } from "src/app/services/product.service"

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private location: Location) { }

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
    this.productService.addProduct(product)
        .subscribe(() => this.goBack());
  }

  cancelUpdate(): void {
    this.formGroup.reset();
    this.goBack();
  }

  onSubmit(buttonType: string): void {
    if(buttonType==="Submit") {
      this.addProduct();
    }
    if(buttonType==="Cancel") {
      this.cancelUpdate();
    }
  }

  goBack(): void {
    this.location.back();
  }
}
