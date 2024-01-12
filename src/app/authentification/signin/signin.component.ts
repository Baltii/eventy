import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  signinForm!: FormGroup;
  initForm() {
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }
  ngOnInit() {
    this.initForm();
  }
  signin() {
    let data = {
      email: this.signinForm.get('email')?.value,
      password: this.signinForm.get('password')?.value,
    };
    this.authService.signin(data).subscribe(
      (res) => {
        sessionStorage.setItem('token', res.token);
        this.authService.me().subscribe((res) => {
          console.log(res);
          sessionStorage.setItem('me', JSON.stringify(res.user));
          this.toastr.success(`Welcome ${data.email}!`, 'Toastr fun!');
          setTimeout(() => {
            this.router.navigateByUrl('/');
          }, 1000);
        });
      },
      (err) => {
        if (err.status == 401) {
          this.toastr.error(`You need to activate your account first`);
        } else {
          this.toastr.error(`Try Again!`);
        }
      }
    );
  }
}
