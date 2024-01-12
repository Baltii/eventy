import { Component, Input, OnInit } from '@angular/core';
import { ClubService } from '../../services/club.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent implements OnInit {
  @Input() data: any;
  editForm: any;
  selectedFile: any;
  minDate = new Date();
  constructor(
    private eventService: ClubService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm(this.data);
    if (this.data.image) {
      this.selectedFile = this.data.image;
    }
  }
  initForm(data: any) {
    this.editForm = new FormGroup({
      title: new FormControl(data.title, Validators.required),
      location: new FormControl(data.location, Validators.required),
      isPayed: new FormControl(data.isPayed, Validators.required),
      price: new FormControl(data.price),
      category: new FormControl(data.category, Validators.required),
      description: new FormControl(data.description),
      date: new FormControl(data.date, Validators.required),
    });
  }

  onFileSelected(event: any): void {
    // Retrieve the selected file from the input event
    this.selectedFile = event.target.files[0];
  }
  UpdateEvent() {
    let event = {
      title: this.editForm.get('title').value,
      description: this.editForm.get('description').value,
      category: this.editForm.get('category').value,
      location: this.editForm.get('location').value,
      date: this.editForm.get('date').value,
      isPayed: this.editForm.get('isPayed').value,
      price: this.editForm.get('price').value,
    };
    this.eventService
      .updateEvent(this.data.id, event, this.selectedFile)
      .subscribe(
        (res) => {
          this.toastr.success('Event Updated!', 'Successfully!');
        },
        (err) => {
          this.toastr.error('Error!', 'Something wrong happend');
        }
      );
  }
}
