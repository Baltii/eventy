import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClubService } from '../../services/club.service';

@Component({
  selector: 'app-admin-event-detail',
  templateUrl: './admin-event-detail.component.html',
  styleUrls: ['./admin-event-detail.component.scss'],
})
export class AdminEventDetailComponent implements OnInit {
  allParticipats: any;
  confirmedParticipats: any;
  notConfirmedParticipats: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clubService: ClubService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clubService
        .getParticipationByEvent(params.get('id'))
        .subscribe((res) => {
          this.allParticipats = res;
          console.log(this.allParticipats);
          this.confirmedParticipats = this.allParticipats.filter(
            (item: any) => item.isConfirmed == true
          );
          this.notConfirmedParticipats = this.allParticipats.filter(
            (item: any) => item.isConfirmed == false
          );
        });
    });
  }
}
