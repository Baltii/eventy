import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthentificationService } from '../authentification-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  @ViewChild('clubName') clubName!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('password') password!: ElementRef;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef;
  clubNameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  constructor(private authService: AuthentificationService) {}

  signup(): void {
    this.resetErrors();

    const clubName = this.clubName.nativeElement.value;
    const email = this.email.nativeElement.value;
    const password = this.password.nativeElement.value;
    const confirmPassword = this.confirmPassword.nativeElement.value;

    if (!clubName) {
      this.clubNameError = 'Please enter your Club Name';
    }

    if (!email) {
      this.emailError = 'Please include a valid email address';
    }

    if (password.length < 8 || !password) {
      this.passwordError = 'Password should be at least 8 characters';
    }

    if (password !== confirmPassword) {
      this.confirmPasswordError =
        'Password does not match the confirmation password';
    }

    if (!this.hasErrors()) {
      const club = { clubName, email, password };
      this.authService.signup(club);
    }
  }

  resetErrors(): void {
    this.clubNameError = '';
    this.emailError = '';
    this.passwordError = '';
    this.confirmPasswordError = '';
  }

  hasErrors(): boolean {
    return (
      this.clubNameError !== '' ||
      this.emailError !== '' ||
      this.passwordError !== '' ||
      this.confirmPasswordError !== ''
    );
  }
}
