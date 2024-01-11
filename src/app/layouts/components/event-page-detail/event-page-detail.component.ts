import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ClubService } from 'src/app/club/services/club.service';

@Component({
  selector: 'app-event-page-detail',
  templateUrl: './event-page-detail.component.html',
  styleUrls: ['./event-page-detail.component.scss'],
})
export class EventPageDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private clubService: ClubService,
    private route: ActivatedRoute
  ) {}
  data: any = {};

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = params.get('id');
      this.clubService.getEventById(id).subscribe(
        (res) => {
           const originalDate = res.date;
           const datePipe = new DatePipe('en-US');
           const formattedDate = datePipe.transform(
             originalDate,
             'yyyy-MM-dd HH:mm'
           );
          
          this.data.title = res.title,
            this.data.description = res.description;
            this.data.date = formattedDate;
            this.data.isPayed = res.isPayed;
            this.data.location = res.location;
          
        
          if (res.isPayed === true) {
            this.data.isPayed = 'Paid';
            this.data.price = res.price;
          } else {
            this.data.isPayed = 'Free'
          }
          this.clubService
            .getEventImage(res.photo)
            .subscribe((imageData: Blob) => {
              const reader = new FileReader();
              reader.readAsDataURL(imageData);
              reader.onloadend = () => {
                this.data.image = reader.result as string;
              };
            });
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  /*getCurrentDate() {
    let currentDate = new Date();

    // Get individual components of the date
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1; // Months are zero-indexed, so we add 1
    let day = currentDate.getDate();

    // Format the date as a string (e.g., "YYYY-MM-DD")
    let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}`;
    return formattedDate;
  }*/
}
