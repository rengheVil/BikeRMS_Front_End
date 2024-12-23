import { Component , Input, OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cusselect-date',
  templateUrl: './cusselect-date.component.html',
  styleUrl: './cusselect-date.component.css'
})
export class CusselectDateComponent implements OnInit {


  motorbikes: any[] = [];
  @Input() test : any;

  constructor(private bikeService: BikeService, private rentalService: RentalService, private fb: FormBuilder , private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.loadMotorbikes();
  }

  

  loadMotorbikes(): void {

    this.bikeService.getMotorbikes().subscribe((data) => {
      console.log(data)
      // Filter out bikes that are already requested
      this.motorbikes = data.filter((bike: any) => !bike.isRequested);
    });
  }

  requestRental(motorbikeId: number): void {
    console.log(motorbikeId);


    let user: any;
    let userId = parseInt(localStorage.getItem("userId") || "")
    console.log(userId);
    try {
      if (!userId) {
        alert("User Not Exist")
      }
    } catch (error) {
      alert('User data is not available or corrupted.');
      return;
    }
    let requestDate = new Date();
    this.rentalService.requestRental(motorbikeId, userId, requestDate).subscribe(
      (response) => {
        this.toastr.success(`${userId}, your request was successfully sent. Please wait.`);
        alert(response.Message);
        this.loadMotorbikes();
      },
      (error) => {
        console.error('Error during rental request:', error);
        this.toastr.error('There was an error processing your rental request.');
        alert('There was an error processing your rental request.');
      }
    );
  }



  // search function 

  searchTerm: string = '';

  // Filtered list of motorbikes
  filteredMotorbikes = this.motorbikes;

  // Filter function
  filterBikes() {
    const term = this.searchTerm.toLowerCase();
    this.filteredMotorbikes = this.motorbikes.filter(bike =>
      bike.brand.toLowerCase().includes(term) ||
      bike.model.toLowerCase().includes(term) ||
      bike.category.toLowerCase().includes(term)
    );
  }


}