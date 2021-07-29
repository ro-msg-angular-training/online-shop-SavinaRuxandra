import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from "src/app/models/user.model"
import { Credentials } from "src/app/models/credentials.model"

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3000/login';
  public currentUser!: User;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login(credentials: Credentials): Observable<User> {
    return this.http
          .post<User>(this.url, credentials)
          .pipe(map(user => this.currentUser = user));
  }
}
