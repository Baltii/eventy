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
        this.toastr.success(`Welcome ${data.email}!`, 'Toastr fun!');
        setTimeout(() => {
          this.router.navigateByUrl('/');
        }, 1000);
      },
      (err) => {
        this.toastr.error(`Try Again!`);
      }
    );
  }
}
