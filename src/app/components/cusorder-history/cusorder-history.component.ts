import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";

@Component({
  selector: 'app-cusorder-history',
  templateUrl: './cusorder-history.component.html',
  styleUrl: './cusorder-history.component.css'
})

export class CusorderHistoryComponent implements OnInit{


  orderHistory: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.bikeService.getOrderHistory().subscribe((data) => {
      this.orderHistory = data;
    });
  }
}
