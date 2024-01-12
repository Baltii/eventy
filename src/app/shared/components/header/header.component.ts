import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  connectedUser: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    let data = sessionStorage.getItem('me');
    if (data !== null) {
      this.connectedUser = JSON.parse(data);
      console.log(this.connectedUser);
    }
  }

  goToSignUp() {
    this.router.navigate(['/authentication/signup']);
  }
  goToSignin() {
    this.router.navigate(['/authentication/signin']);
  }
  goToProfile() {
    this.router.navigate(['/club/dashboard']);
  }
  logout() {
    sessionStorage.clear();
  }
}
