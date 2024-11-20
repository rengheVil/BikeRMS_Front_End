import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";


@Component({
  selector: 'app-morder-history',
  templateUrl: './morder-history.component.html',
  styleUrl: './morder-history.component.css'
})
export class MorderHistoryComponent implements OnInit{


  orderHistory: any[] = [];

  constructor(private bikeService: BikeService) {}

  ngOnInit(): void {
    this.loadOrderHistory();
  }

  loadOrderHistory(): void {
    this.bikeService.getOrderHistory().subscribe((data) => {
      this.orderHistory = data;
    });
  }
}
