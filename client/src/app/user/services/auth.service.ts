import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'api/users/';

  constructor(private httpClient: HttpClient) {}

  createUser(user: Register): Observable<any> {
    return this.httpClient.post(this.api + 'register', user, {
      headers: { 'content-type': 'application/json' },
    });
  }
  loginUser(email: string, password: string): Observable<any> {
    return this.httpClient.post(
      this.api + 'login',
      { email, password },
      {
        headers: { 'content-type': 'application/json' },
      }
    );
  }
}
