import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(club: any): Observable<any> {
    return this.http.post(BASE_URL + `auth/signup`, club);
  }
  signin(club: any): Observable<any> {
    return this.http.post(BASE_URL + `auth/signin`, club);
  }
}
