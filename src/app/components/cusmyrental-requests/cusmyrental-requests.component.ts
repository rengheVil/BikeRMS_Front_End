import { Component , OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";


@Component({
  selector: 'app-cusmyrental-requests',
  templateUrl: './cusmyrental-requests.component.html',
  styleUrl: './cusmyrental-requests.component.css'
})
export class CusmyrentalRequestsComponent implements OnInit{

  rentalRequests: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadRentalRequests();
  }

  loadRentalRequests(): void {
    this.bikeService.getRentalRequests().subscribe((data) => {
      this.rentalRequests = data;
    });
  }
}
