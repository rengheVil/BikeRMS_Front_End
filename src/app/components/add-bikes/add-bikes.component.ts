import { Component, OnInit} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';
import { Router } from '@angular/router';
import { Bike } from '../../Models/Bike';
//import { ToastrService } from 'ngx-toastr';  private toastr: ToastrService,



@Component({
  selector: 'app-add-bikes',
  templateUrl: './add-bikes.component.html',
  styleUrl: './add-bikes.component.css'
})
export class AddBikesComponent  {

  addBikeForm: any;
  bike!: Bike;

  constructor(private fb: FormBuilder, private bikeService: BikeService, private router: Router) {
    this.addBikeForm = this.fb.group({
      regNumber: ['', [Validators.required]],
      brand: [''],
      model: [''],
      category: ['', [Validators.required]],
      bikeImage : ['']
    });
  }



  onAddBike() {
    console.log(this.addBikeForm.value)
    this.bike = (this.addBikeForm.value);
    this.bikeService.createbike(this.bike).subscribe(data => {
      // this.toastr.success("successfully added", "Success")
      this.router.navigate(['/availableBike']);
    })
  }



}
