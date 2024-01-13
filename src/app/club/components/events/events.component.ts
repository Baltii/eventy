import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(
    private clubService: ClubService,
    private modalService: NgbModal
  ) {}
  events: any[] = [];
  dataLength!: number;

  ngOnInit(): void {
    this.clubService.getEventByUser().subscribe((events: any) => {
      this.dataLength = events.length;
      for (let i = 0; i < events.length; i++) {
        console.log(events[i]);
        const originalDate = events[i].date;
        const datePipe = new DatePipe('en-US');
        const formattedDate = datePipe.transform(
          originalDate,
          'yyyy-MM-dd HH:mm'
        );
        const event = {
          id: events[i]._id,
          title: events[i].title,
          description: events[i].description,
          date: formattedDate,
          location: events[i].location,
          isPayed: '',
          price: '',
          image: '',
        };
        if (events[i].isPayed === true) {
          event.isPayed = 'Paid';
          event.price = events[i].price;
        } else {
          event.isPayed = 'Free';
        }
        this.clubService
          .getEventImage(events[i].photo)
          .subscribe((imageData: Blob) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageData);
            reader.onloadend = () => {
              event.image = reader.result as string;
            };
          });
        this.events.push(event);
      }
    });
  }

  openEditModal(data: any) {
    const modalRef = this.modalService.open(EditEventComponent, {
      size: 'xl',
      backdrop: 'static',
      keyboard: false,
      centered: true,
    });
    modalRef.componentInstance.data = data;
  }
}
