import { Component, Input } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { RentalService } from "../../services/rental.service";
import { Route } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Bike } from '../../Models/Bike';


@Component({
  selector: 'app-medit-bike',
  templateUrl: './medit-bike.component.html',
  styleUrl: './medit-bike.component.css'
})
export class MeditBikeComponent {

  
  editBikeForm: any;
  motorbikes: any[] = [];
  @Input() bikeData : any;

  constructor(private fb: FormBuilder, private bikeService: BikeService, private rentalService: RentalService) { 
      this.editBikeForm = this.fb.group({
        regNumber: ['', [Validators.required]],
        brand: [''],
        model: [''],
        category: ['', [Validators.required]],
       // bikeImage : [null]
  });

  }

  ngOnInit(): void {
    this.loadMotorbikes();
    console.log(this.bikeData);
    this.editBikeForm.patchValue(this.bikeData);
  }

  loadMotorbikes(): void {
    this.bikeService.getMotorbikes().subscribe(
      (data) => (this.motorbikes = data),
      (error) => console.error(error)
    );
  }

  onSubmit(): void {
    if (this.editBikeForm.valid) {
      const updatedBike = {
        ...this.bikeData,
        ...this.editBikeForm.value,
      };

      this.bikeService.updateMotorbike(this.bikeData.id, updatedBike).subscribe(
        (response) => {
          console.log('Bike updated successfully:', response);
          this.loadMotorbikes();
        },
        (error) => console.error('Error updating bike:', error)
      );
    } else {
      console.warn('Form is invalid. Please check the fields.');
    }
  }


  // onUpdate(bike: Bike): void {
  //     const updatedBike = { ...bike, brand: 'Updated Brand' }; 
  //   this.bikeService.updateMotorbike(bike.id, updatedBike).subscribe(
  //     (response) => {
  //       console.log('Updated:', response);
  //       this.loadMotorbikes();
  //     },
  //     (error) => console.error(error)
  //   );
  // }
  viewBike(){
  console.log(this.bikeData);
  }


}
