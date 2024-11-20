import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";

@Component({
  selector: 'app-cusmy-rentals',
  templateUrl: './cusmy-rentals.component.html',
  styleUrl: './cusmy-rentals.component.css'
})
export class CusmyRentalsComponent implements OnInit{

  rentals: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadRentals();
  }

  loadRentals(): void {
    this.bikeService.getRentals().subscribe((data) => {
      this.rentals = data;
    });
  }

  returnRental(rentalId: number): void {
    this.bikeService.returnRental(rentalId).subscribe((response) => {
      alert(response.Message);
      this.loadRentals(); 
    });
  }
}
