import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    if (sessionStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  activateAccount(token: any): Observable<any> {
    return this.http.get(BASE_URL + `auth/activate/${token}`);
  }
  me(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${sessionStorage.getItem('token')}`,
    });
    return this.http.get(BASE_URL + `auth/user`, { headers });
  }
  signup(club: any): Observable<any> {
    return this.http.post(BASE_URL + `auth/signup`, club);
  }
  signin(club: any): Observable<any> {
    return this.http.post(BASE_URL + `auth/signin`, club);
  }

  logout() {
    sessionStorage.clear();
  }

  forgetPassword(data: any): Observable<any> {
    return this.http.post(BASE_URL + `auth/forgotPassword`, data);
  }

  resetPassword(token : any ,data :any): Observable<any> {
   
    return this.http.post(BASE_URL + `auth/resetPassword/${token}`, data);
  }
}
