import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";


@Component({
  selector: 'app-morder-history',
  templateUrl: './morder-history.component.html',
  styleUrl: './morder-history.component.css'
})
export class MorderHistoryComponent implements OnInit{


  orderHistory: any[] = [];

  constructor(private bikeService: BikeService, private rentalService: RentalService) {}

  ngOnInit(): void {
    this.loadOrderHistory();
  }

  loadOrderHistory(): void {
    this.rentalService.getOrderHistory().subscribe((data) => {
      this.orderHistory = data;
    });
  }
}
