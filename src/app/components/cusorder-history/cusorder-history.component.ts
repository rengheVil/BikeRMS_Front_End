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


  LoggedinUser =localStorage.getItem("user") || '';
  User:User=JSON.parse(this.LoggedinUser)
  orderHistory: any[] = [];
  userId: number = 1002; 
  // orderHistory: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  // ngOnInit(): void {
  //   this.rentalService.getOrderHistory().subscribe((data) => {
  //     this.orderHistory = data;
  //   });
  // }


 

  ngOnInit(): void {
    this.userId=this.User.id;
    this.fetchOrderHistory();
  }

  fetchOrderHistory(): void {
    console.log(this.userId)
    this.rentalService.getOrderHistoryByUserId(this.User.id).subscribe(
      (data: any[]) => {
        this.orderHistory = data;
      },
      (error) => {
        console.error('Error fetching order history:', error);
      }
    );
  }


}
