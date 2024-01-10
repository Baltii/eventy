import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-activation-account',
  templateUrl: './activation-account.component.html',
  styleUrls: ['./activation-account.component.scss'],
})
export class ActivationAccountComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let token = params.get('token');
      console.log(token);
      this.authService.activateAccount(token).subscribe((res) => {
        console.log(res);
      });
      setTimeout(() => {
        this.router.navigateByUrl('/authentication/signin');
      }, 10000);
    });
  }
}
