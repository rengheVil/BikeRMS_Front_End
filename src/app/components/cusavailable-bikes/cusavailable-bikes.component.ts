import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-cusavailable-bikes',
  templateUrl: './cusavailable-bikes.component.html',
  styleUrl: './cusavailable-bikes.component.css'
})
export class CusavailableBikesComponent implements OnInit{


  motorbikes: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService ) {}

  ngOnInit(): void {
    this.loadMotorbikes();
  }

  // loadMotorbikes(): void {
  //   this.bikeService.getMotorbikes().subscribe((data) => {
  //     this.motorbikes = data;
  //   });
  // }

  loadMotorbikes(): void {
    this.bikeService.getMotorbikes().subscribe((data) => {
      // Filter out bikes that are already requested
      this.motorbikes = data.filter((bike: any) => !bike.isRequested);
    });
  }

  requestRental(motorbikeId: number): void {
    const customer = 'TestCustomer'; 
    this.rentalService.requestRental(motorbikeId, customer).subscribe((response) => {
      alert(response.Message);
      this.loadMotorbikes();
    });
  }

  

}
