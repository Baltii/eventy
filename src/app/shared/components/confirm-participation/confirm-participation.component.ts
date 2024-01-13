import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClubService } from 'src/app/club/services/club.service';

@Component({
  selector: 'app-confirm-participation',
  templateUrl: './confirm-participation.component.html',
  styleUrls: ['./confirm-participation.component.scss'],
})
export class ConfirmParticipationComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: ClubService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let token = params.get('token');
      console.log(token);
      this.eventService.confirmParticipation(token).subscribe((res) => {
        this.toastr.success('Paticipation Confirmed!');
      });
    });
  }

  gotoHome() {
    this.router.navigateByUrl('/');
  }
}
