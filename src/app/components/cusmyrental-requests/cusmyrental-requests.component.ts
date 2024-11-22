import { Component , OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";


@Component({
  selector: 'app-cusmyrental-requests',
  templateUrl: './cusmyrental-requests.component.html',
  styleUrl: './cusmyrental-requests.component.css'
})
export class CusmyrentalRequestsComponent implements OnInit{

  rentalRequests: any[] = [];

  constructor(private bikeService: BikeService , private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentalRequests();
  }

  loadRentalRequests(): void {
    this.rentalService.getRentalRequests().subscribe((data) => {
      this.rentalRequests = data;
    });
  }
}
