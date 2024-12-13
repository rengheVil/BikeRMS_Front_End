import { Component , OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { RentalRequest } from '../../Models/Rental';
import { log } from 'console';
import { User } from '../../Models/User';


@Component({
  selector: 'app-cusmyrental-requests',
  templateUrl: './cusmyrental-requests.component.html',
  styleUrl: './cusmyrental-requests.component.css'
})
export class CusmyrentalRequestsComponent implements OnInit{

   LoggedinUser =localStorage.getItem("userId") || '';
  rentalRequests: RentalRequest[] = [];
  userId: any = 0;

  constructor(private bikeService: BikeService , private rentalService: RentalService) {}

  ngOnInit(): void {
   
    this.userId = this.LoggedinUser;
    //this.userId=
    this.loadRentalRequests();
  }

  

  loadRentalRequests(): void {
    let userId = parseInt(localStorage.getItem("userId") || "");
    console.log(userId);
     let user: any;
     console.log(user);
    this.rentalService.getRentals(userId).subscribe(data => {
      this.rentalRequests = data;
      console.log(data);
    },
  err=>{
    console.log(err.message)
  });
  }


 
}
