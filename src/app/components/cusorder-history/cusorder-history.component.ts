import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { User } from "../../Models/User";

@Component({
  selector: 'app-cusorder-history',
  templateUrl: './cusorder-history.component.html',
  styleUrl: './cusorder-history.component.css'
})

export class CusorderHistoryComponent implements OnInit{


  LoggedinUser =localStorage.getItem("userId") || '';

  orderHistory: any[] = [];
  userId: any = 1002; 
  // orderHistory: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  // ngOnInit(): void {
  //   this.rentalService.getOrderHistory().subscribe((data) => {
  //     this.orderHistory = data;
  //   });
  // }


 

  ngOnInit(): void {
    this.userId=this.LoggedinUser;
    this.fetchOrderHistory();
  }

  fetchOrderHistory(): void {
    let userId = parseInt(localStorage.getItem("userId") || "");
    console.log(userId);
    let user: any;
    console.log(user);
    this.rentalService.getOrderHistoryByUserId(userId).subscribe(
      (data: any[]) => {
        this.orderHistory = data;
      },
      (error) => {
        console.error('Error fetching order history:', error);
      }
    );
  }




}
