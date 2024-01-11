import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  forgetForm!: FormGroup;

  initForm() {
    this.forgetForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
    this.initForm();
  }

  forget() {
    let data = {
      email: this.forgetForm.get('email')?.value,
    };  
    this.authService.forgetPassword(data).subscribe(
      (res) => {
        this.toastr.success('Check your email !');
        setTimeout(() => {
          this.router.navigateByUrl('/authentication/signin');
        }, 500);
      },
      (err) => {
        console.log(err)
        this.toastr.error('Try again');
      }
    );

  }
}
