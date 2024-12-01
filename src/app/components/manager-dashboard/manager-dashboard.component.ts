import { Component , OnInit} from '@angular/core';
import { BikeService } from '../../services/bike.service';


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent {


  
  totalMotorbikes: number = 0;
  activeRentals: number = 0;
  monthlyRevenue: number = 0;
  motorbikes = [];
  activeRentalsList = [];

  constructor(private bikeService: BikeService) {}

  // ngOnInit(): void {implements OnInit
  //   this.fetchDashboardData();
  // }

  // fetchDashboardData(): void {
  //  this.bikeService.getMotorbikes().subscribe((data) => {
  //     this.totalMotorbikes = data.totalMotorbikes;
  //     this.activeRentals = data.activeRentals;
  //     this.monthlyRevenue = data.monthlyRevenue;
  //     this.motorbikes = data.motorbikes;
  //     this.activeRentalsList = data.activeRentalsList;
  //   });
  // }


}
