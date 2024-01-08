import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEventComponent } from '../modals/view-event/view-event.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() data: any;
  constructor(private modal: NgbModal, private router: Router) {}
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

  goToDetail(id: any) {
    this.router.navigateByUrl('/event/' + id);
  }
}
