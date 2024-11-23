import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';

import { Router } from '@angular/router';
import { AddBike, Bike } from '../../Models/Bike';
import { ToastrService } from 'ngx-toastr';
import { error } from 'console';
//import { ToastrService } from 'ngx-toastr';  private toastr: ToastrService,



@Component({
  selector: 'app-add-bikes',
  templateUrl: './add-bikes.component.html',
  styleUrl: './add-bikes.component.css'
})
export class AddBikesComponent {

  addBikeForm: any;
  bike!: AddBike;
  selectedFile: File | null = null;
  formData = new FormData;
  // toster = inject(ToastrService)

  constructor(private fb: FormBuilder, private bikeService: BikeService, private router: Router, private toastr: ToastrService) {
    this.addBikeForm = this.fb.group({
      regNumber: ['', [Validators.required]],
      brand: [''],
      model: [''],
      category: ['', [Validators.required]],
      imageData: [null]
    });
  }



  onAddBike() {
    this.formData.append('RegNumber', this.addBikeForm.value.regNumber);
    this.formData.append('Brand', this.addBikeForm.value.brand);
    this.formData.append('Model', this.addBikeForm.value.model)
    this.formData.append('Category', this.addBikeForm.value.category);
    console.log(this.selectedFile);

    if (this.selectedFile) {
      this.formData.append('ImageData', this.selectedFile, this.selectedFile.name);
    } else {
      console.error('No file selected');
    }

    this.bikeService.CreateBike1(this.formData).subscribe(
      (data) => (
        this.toastr.success("Successfully added")),
      (error) => console.error(error)
    )

  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedFile = file; // Store file in a class property
    } else {
      console.error('No file selected');
    }
  }
}
