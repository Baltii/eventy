import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-club',
  templateUrl: './header-club.component.html',
  styleUrls: ['./header-club.component.scss'],
})
export class HeaderClubComponent implements OnInit {
  connectedUser: any;
  constructor(private router: Router) {}
  ngOnInit(): void {
    let data = sessionStorage.getItem('me');
    if (data !== null) {
      this.connectedUser = JSON.parse(data);
    }
  }

  goToProfile() {
    this.router.navigate(['/club/dashboard']);
  }
  logout() {
    sessionStorage.clear();
  }
}
