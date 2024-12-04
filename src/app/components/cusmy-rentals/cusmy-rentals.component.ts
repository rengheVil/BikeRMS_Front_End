import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Rental } from '../../Models/Rental';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cusmy-rentals',
  templateUrl: './cusmy-rentals.component.html',
  styleUrl: './cusmy-rentals.component.css'
})
export class CusmyRentalsComponent implements OnInit{

  rentals: Rental[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService , private toastr: ToastrService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

 
  loadRentals(): void {
   // let user = JSON.parse(localStorage.getItem("user") || '');
    let userId = parseInt(localStorage.getItem("userId") || "");
    console.log(userId);
    let user: any;
    console.log(user);
    this.rentalService.getUserApprovals(userId).subscribe(
      (data) => {
        console.log(data);
        this.rentals = data;
      },
      (error) => {
        console.error('Error fetching rentals:', error);
      }
    );
  }


  returnRental(rentalId: number): void {
    this.rentalService.returnRental(rentalId).subscribe((response) => {
      alert(response.Message);
      this.toastr.success('Returned .');
      this.loadRentals(); 
    });
  }


}
