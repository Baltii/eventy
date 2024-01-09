import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-club',
  templateUrl: './sidebar-club.component.html',
  styleUrls: ['./sidebar-club.component.scss'],
})
export class SidebarClubComponent implements OnInit {
  constructor(private router: Router) {}

  isSelected(route: string): boolean {
    return this.router.url === route;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
