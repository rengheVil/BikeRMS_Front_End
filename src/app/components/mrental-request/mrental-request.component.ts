import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";


@Component({
  selector: 'app-mrental-request',
  templateUrl: './mrental-request.component.html',
  styleUrl: './mrental-request.component.css'
})
export class MrentalRequestComponent implements OnInit{

  rentalRequests: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadRentalRequests();
  }

  loadRentalRequests(): void {
    this.rentalService.getRentalRequests().subscribe((data) => {
      this.rentalRequests = data;
    });
  }

  approveRequest(id: number): void {
    this.rentalService.updateRequestStatus(id, 'approved').subscribe(() => {
      this.loadRentalRequests();
    });
  }
}
