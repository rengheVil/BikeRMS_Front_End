import { Component, OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";

@Component({
  selector: 'app-customer-rentals',
  templateUrl: './customer-rentals.component.html',
  styleUrl: './customer-rentals.component.css'
})
export class CustomerRentalsComponent implements OnInit {

  rentals: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

  loadRentals(): void {
    this.bikeService.getRentals().subscribe(
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
