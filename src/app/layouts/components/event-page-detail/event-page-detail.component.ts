import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/authentification/services/auth.service';
import { ClubService } from 'src/app/club/services/club.service';
import { ParticipateEventComponent } from 'src/app/shared/components/modals/participate-event/participate-event.component';

@Component({
  selector: 'app-event-page-detail',
  templateUrl: './event-page-detail.component.html',
  styleUrls: ['./event-page-detail.component.scss'],
})
export class EventPageDetailComponent implements OnInit {
  constructor(
    private router: Router,
    private clubService: ClubService,
    private modal: NgbModal,
    private route: ActivatedRoute
  ) {}
  data: any = {};
  eventId: any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('id');
      this.clubService.getEventById(this.eventId).subscribe(
        (res) => {
          const originalDate = res.date;
          const datePipe = new DatePipe('en-US');
          const formattedDate = datePipe.transform(
            originalDate,
            'yyyy-MM-dd HH:mm'
          );

          (this.data.title = res.title),
            (this.data.description = res.description);
          this.data.date = formattedDate;
          this.data.isPayed = res.isPayed;
          this.data.location = res.location;

          if (res.isPayed === true) {
            this.data.isPayed = 'Paid';
            this.data.price = res.price;
          } else {
            this.data.isPayed = 'Free';
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

  openModal() {
    const modalRef = this.modal.open(ParticipateEventComponent, {
      size: 'md',
      keyboard: false,
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.title = 'Event Participation';
    modalRef.componentInstance.id = this.eventId;
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
