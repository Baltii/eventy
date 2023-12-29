import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEventComponent } from '../modals/view-event/view-event.component';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() data: any;
  constructor(private modal: NgbModal) {}
  ngOnInit() {}
  openModal(data: any) {
    const modalRef = this.modal.open(ViewEventComponent, {
      size: 'lg',
      keyboard: false,
      backdrop: 'static',
      centered: true,
    });
    modalRef.componentInstance.data = data;
  }
}
