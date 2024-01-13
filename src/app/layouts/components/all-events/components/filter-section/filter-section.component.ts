import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss'],
})
export class FilterSectionComponent implements OnInit {
  constructor(private sharedService: SharedService) {}
  filterForm: any;
  

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.filterForm = new FormGroup({
      search: new FormControl(''),
      isPayed: new FormControl(null),
      category: new FormControl(''),
    });
  }

  onSubmit() {
    const filter: any = {};

    if (this.filterForm.value.search.trim() !== '') {
      filter['search'] = this.filterForm.value.search;
    }

    if (this.filterForm.value.category.trim() !== '') {
      filter['category'] = this.filterForm.value.category;
    }

    if (this.filterForm.value.isPayed !== null) {
      filter['isPayed'] = this.filterForm.value.isPayed;
    }

    console.log(filter);

    this.sharedService.searchEvents(filter).subscribe((result) => {
      console.log(result);
    });
  }
}
