import { Component, OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { error } from 'console';
import { Rental } from '../../Models/Rental';

@Component({
  selector: 'app-customer-rentals',
  templateUrl: './customer-rentals.component.html',
  styleUrl: './customer-rentals.component.css'
})
export class CustomerRentalsComponent  implements OnInit{

  rentals: Rental[] = [];
  rental! :Rental;
  //rentals: Rental[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

  // Load rentals from the API
  
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    // if (!user || !user.id) {
    //   console.error('User not found in localStorage.');
    //   return;
    // }

    // this.rentalService.getRentals(user.id).subscribe(
    //   (data: any[]) => {
    //     this.rentals = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.error('Error fetching rentals:', error);
    //     alert('Failed to load rentals. Please try again later.');
    //   }
    // );
    
    loadRentals(): void {
      this.rentalService.getAllRentalRecords().subscribe(
        (data) => {
          this.rentals = data;
          console.log('Rentals:', this.rentals);
          console.log(data);
        },
        (error) => {
          console.error('Error fetching rentals:', error);
          alert('Failed to load rentals. Please try again later.');
        }
      );
    }

    
    // loadRentals(): void {
    //   this.rentalService.getAllRentalRecords().subscribe(
    //     (data) => {
    //       this.rentals = data.map((rental: any) => ({
    //         id: rental.id,
    //         motorbike: rental.motorbike || { regNumber: null, brand: null, model: null },
    //         user: rental.user || { userName: 'N/A' },
    //         rentDate: rental.rentDate,
    //         status: rental.status || false,
    //       }));
    //       console.log('Processed Rentals:', this.rentals);
    //     },
    //     (error) => {
    //       console.error('Error fetching rentals:', error);
    //       alert('Failed to load rentals. Please try again later.');
    //     }
    //   );
    // }
    
   


  // Dynamic class based on status
  getStatusClass(status: string): string {
    return status === 'Overdue' ? 'bg-danger' : 'bg-success';
  }




}
