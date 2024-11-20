import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cusavailable-bikes',
  templateUrl: './cusavailable-bikes.component.html',
  styleUrl: './cusavailable-bikes.component.css'
})
export class CusavailableBikesComponent implements OnInit{


  motorbikes: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadMotorbikes();
  }

  loadMotorbikes(): void {
    this.bikeService.getMotorbikes().subscribe((data) => {
      this.motorbikes = data;
    });
  }

  requestRental(motorbikeId: number): void {
    const customer = 'TestCustomer'; 
    this.bikeService.requestRental(motorbikeId, customer).subscribe((response) => {
      alert(response.Message);
    });
  }
}
