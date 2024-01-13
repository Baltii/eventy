import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClubService } from 'src/app/club/services/club.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent {
  @Input() id: any;
  constructor(
    public activeModal: NgbActiveModal,
    private eventService: ClubService,
    private toastr: ToastrService
  ) {}

  DeleteEvent(id: any) {
    this.eventService.deleteEvent(id).subscribe(
      (res) => {
        this.activeModal.close(null);
        this.toastr.success('Deleted Successfully!');
      },
      (err) => {
        this.toastr.error('Error', 'Someting Wrong Happend');
      }
    );
  }
}
