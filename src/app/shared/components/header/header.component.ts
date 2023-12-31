import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  goToSignUp() {
    this.router.navigate(['/authentication/signup']);
  }
  goToSignin() {
    this.router.navigate(['/authentication/signin']);
  }
}
