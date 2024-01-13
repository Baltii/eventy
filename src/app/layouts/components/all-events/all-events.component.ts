import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ClubService } from 'src/app/club/services/club.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.scss'],
})
export class AllEventsComponent implements OnInit {
  events: any[] = [];
  constructor(private clubService: ClubService) {}

  ngOnInit(): void {
    this.clubService.getEvents().subscribe((events: any) => {
      for (let i = 0; i < events.length; i++) {
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
          clubName: events[i].clubName,
          category: events[i].category,
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
  getCurrentDate() {
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
  }
}
