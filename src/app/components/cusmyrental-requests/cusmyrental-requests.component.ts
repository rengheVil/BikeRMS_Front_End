import { Component , OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { RentalRequest } from '../../Models/Rental';
import { log } from 'console';


@Component({
  selector: 'app-cusmyrental-requests',
  templateUrl: './cusmyrental-requests.component.html',
  styleUrl: './cusmyrental-requests.component.css'
})
export class CusmyrentalRequestsComponent implements OnInit{

  rentalRequests: RentalRequest[] = [];
  userId: number = 7;

  constructor(private bikeService: BikeService , private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentalRequests();
  }

  loadRentalRequests(): void {
    this.rentalService.getRentals(this.userId).subscribe(data => {
      this.rentalRequests = data;
      console.log(data);
      
    });
  }

 
}
