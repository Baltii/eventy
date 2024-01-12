import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClubService } from '../../services/club.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss'],
})
export class AddEventComponent implements OnInit {
  addForm: any;
  selectedFile: any;
  minDate = new Date();
  constructor(
    private eventService: ClubService,
    private toastr: ToastrService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addForm = new FormGroup({
      title: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      isPayed: new FormControl(true, Validators.required),
      price: new FormControl(''),
      category: new FormControl('default', Validators.required),
      description: new FormControl(''),
      date: new FormControl('', Validators.required),
    });
  }

  onFileSelected(event: any): void {
    // Retrieve the selected file from the input event
    this.selectedFile = event.target.files[0];
  }

  addEvent() {
    let data = {
      title: this.addForm.get('title').value,
      description: this.addForm.get('description').value,
      category: this.addForm.get('category').value,
      location: this.addForm.get('location').value,
      date: this.addForm.get('date').value,
      isPayed: this.addForm.get('isPayed').value,
      price: this.addForm.get('price').value,
    };
    this.eventService.addEvent(data, this.selectedFile).subscribe(
      (res) => {
        this.toastr.success('Event Added!', 'Successfully!');
        this.initForm();
      },
      (err) => {
        this.toastr.error('Error!', 'Something wrong happend');
      }
    );
  }
}
