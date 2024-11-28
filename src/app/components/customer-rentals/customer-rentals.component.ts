import { Component, OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";

@Component({
  selector: 'app-customer-rentals',
  templateUrl: './customer-rentals.component.html',
  styleUrl: './customer-rentals.component.css'
})
export class CustomerRentalsComponent  implements OnInit{

  rentals: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  ngOnInit(): void {  
    //this.loadRentals();
  }

  loadRentals(): void {
     let user = JSON.parse(localStorage.getItem("user") || '');
    console.log(user);
    this.rentalService.getRentals(user.id).subscribe(
      (data) => {
        this.rentals = data;
      },
      (error) => {
        console.error('Error fetching rentals:', error);
      }
    );
  }

  getStatusClass(status: string): string {
    return status === 'Overdue' ? 'bg-danger' : 'bg-success';
  }
}
