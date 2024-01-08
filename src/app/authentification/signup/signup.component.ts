import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  clubNameError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';
  clubForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.clubForm = new FormGroup({
      club_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      isAccepted: new FormControl(false, Validators.required),
    });
  }
  signup(): void {
    let data = {
      clubName: this.clubForm.get('club_name')?.value,
      email: this.clubForm.get('email')?.value,
      password: this.clubForm.get('password')?.value,
    };
    this.authService.signup(data).subscribe(
      (res) => {
        this.toastr.success(`Welcome ${data.clubName}!`, 'Toastr fun!');
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 3000);
      },
      (err) => {
        this.toastr.error(`Try Again!`);
      }
    );
  }
}
