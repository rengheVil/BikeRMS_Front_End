import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Rental } from '../../Models/Rental';

@Component({
  selector: 'app-cusmy-rentals',
  templateUrl: './cusmy-rentals.component.html',
  styleUrl: './cusmy-rentals.component.css'
})
export class CusmyRentalsComponent implements OnInit{

  rentals: Rental[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

 
  loadRentals(): void {
    let user = JSON.parse(localStorage.getItem("user") || '');
    console.log(user);
    this.rentalService.getUserApprovals(user.id).subscribe(
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
      this.loadRentals(); 
    });
  }


}
