import { Component, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { DatePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { ToastrService } from 'ngx-toastr';
import { DeleteConfirmationComponent } from 'src/app/shared/components/modals/delete-confirmation/delete-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(
    private clubService: ClubService,
    private modalService: NgbModal,
    private eventService: ClubService,
    private toastr: ToastrService,
    private router: Router
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
          clubName: events[i].clubName,
          category: events[i].category,
        };
        if (events[i].isPayed == false) {
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

  openDetail(id: any) {
    this.router.navigateByUrl(`club/events/${id}`);
  }

  openEditModal(data: any) {
    const modalRef = this.modalService.open(EditEventComponent, {
      size: 'xl',
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.data = data;
  }

  DeleteEvent(id: any) {
    const modalRef = this.modalService.open(DeleteConfirmationComponent, {
      size: 'md',
      keyboard: false,
      centered: true,
      backdrop: 'static',
    });
    modalRef.componentInstance.id = id;
  }
}
