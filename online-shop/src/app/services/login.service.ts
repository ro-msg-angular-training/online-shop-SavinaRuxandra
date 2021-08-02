import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from "src/app/models/user.model"
import { Credentials } from "src/app/models/credentials.model"
import { urlLogin } from './url-config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUser!: User;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<User> {
    return this.http
          .post<User>(urlLogin, credentials)
          .pipe(map(user => this.currentUser = user));
  }
}
