import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  signup(club: any): void {
      console.log('Signing up with:', club);
        this.http
          .post('http://localhost:3000/auth/signup', club, {
            withCredentials: true,
          })
          .subscribe((response: any) => {
            console.log('Signup successfully');
            this.router.navigate(['/authentication/signin']);
          });
  }
}
