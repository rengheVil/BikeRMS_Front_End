import { Component, OnInit, inject} from '@angular/core';
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
export class AddBikesComponent  {

  addBikeForm: any;
  bike!: AddBike;
  selectedFile: File | null = null;
  // toster = inject(ToastrService)

  constructor(private fb: FormBuilder, private bikeService: BikeService, private router: Router) {
    this.addBikeForm = this.fb.group({
      regNumber: ['', [Validators.required]],
      brand: [''],
      model: [''],
      category: ['', [Validators.required]],
      imageData : [null]
    });
  }



  onAddBike() {
    console.log(this.addBikeForm.value)
    this.bike = (this.addBikeForm.value);
    console.log(this.bike)
    this.bikeService.CreateBike1(this.bike).subscribe({
      next:res => console.log(res + "added succss")
    })
  }

  onFileChange(file: File | null): void {
    if (file) {
      this.selectedFile = file;
      this.addBikeForm.patchValue({ imageData: file });
    }
  }


}
