import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';

import { Router } from '@angular/router';
import { AddBike, Bike } from '../../Models/Bike';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';




@Component({
  selector: 'app-cview-request',
  templateUrl: './cview-request.component.html',
  styleUrl: './cview-request.component.css'
})
export class CviewRequestComponent {

  addDateForm: any;
  bike!: AddBike;
  selectedFile: File | null = null;
  formData = new FormData;
  // toster = inject(ToastrService)

  constructor(private fb: FormBuilder, private bikeService: BikeService, private router: Router, private toastr: ToastrService) {
    this.addDateForm = this.fb.group({
      rentdate: ['', [Validators.required]],
      returndate: ['', [Validators.required]],
    
    });
  }

  
  onDateBike() {
    this.formData.append('RegNumber', this.addDateForm.value.regNumber);
    this.formData.append('Brand', this.addDateForm.value.brand);
    console.log(this.selectedFile);

    this.bikeService.CreateBike1(this.formData).subscribe(
      (data) => (
        this.toastr.success("Successfully added")),
      (error) => console.error(error)
    )

  }


}





