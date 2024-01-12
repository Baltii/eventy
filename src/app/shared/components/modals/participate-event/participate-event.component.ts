import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ClubService } from 'src/app/club/services/club.service';

@Component({
  selector: 'app-participate-event',
  templateUrl: './participate-event.component.html',
  styleUrls: ['./participate-event.component.scss'],
})
export class ParticipateEventComponent implements OnInit {
  @Input() title: any;
  @Input() id: any;
  participateForm: any;
  isLoading = false;
  constructor(
    public activeModal: NgbActiveModal,
    private eventService: ClubService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.participateForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
    });
  }

  participate() {
    this.isLoading = true;

    let data = {
      firstName: this.participateForm.get('firstname').value,
      lastName: this.participateForm.get('lastname').value,
      email: this.participateForm.get('email').value,
      phone: this.participateForm.get('phone').value,
      event_id: this.id,
    };
    this.eventService.eventParticipation(data).subscribe(
      (res) => {
        this.isLoading = false;
        this.activeModal.close();
        this.toastr.success('Participation Sent!', res.message);
      },
      (err) => {
        this.isLoading = false;
        this.toastr.error('Failed!', 'Verify your informations');
      }
    );
  }
}
