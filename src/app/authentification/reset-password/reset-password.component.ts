import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  resetForm!: FormGroup;

  initForm() {
    this.resetForm = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirm_password: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.initForm();
  }

  reset() {
    let data = {
      password: this.resetForm.get('password')?.value,
    };
    this.route.paramMap.subscribe((params) => {
      let token = params.get('token');
      console.log(token);
       this.authService.resetPassword(token ,data).subscribe(
         (res) => {
           this.toastr.success('Your password has been Reset Successfully !');
           setTimeout(() => {
             this.router.navigateByUrl('/authentication/signin');
           }, 500);
         },
         (err) => {
           console.log(err);
           this.toastr.error('Try again');
         }
       );
    });
   
  }
}
