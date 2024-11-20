import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";


@Component({
  selector: 'app-mrental-request',
  templateUrl: './mrental-request.component.html',
  styleUrl: './mrental-request.component.css'
})
export class MrentalRequestComponent implements OnInit{

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

  approveRequest(id: number): void {
    this.bikeService.updateRequestStatus(id, 'approved').subscribe(() => {
      this.loadRentalRequests();
    });
  }
}
