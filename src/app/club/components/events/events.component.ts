import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private clubService: ClubService) {}
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
}
