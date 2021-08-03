import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from "src/app/services/login.service"
import { Credentials } from "src/app/models/credentials.model"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;
  error = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginService: LoginService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onSubmit(): void {
    const credentials = <Credentials> {
      username: this.formGroup.controls["username"].value,
      password: this.formGroup.controls["password"].value
    }
    this.loginService.login(credentials).subscribe(
                     user => {
                        this.router.navigate(['/products']);
                     },
                     error => {
                        this.error = error;
                     });
  }
}
