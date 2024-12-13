import { Component , OnInit} from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../Models/Rental';
import { User } from '../../Models/User';


@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrl: './manager-dashboard.component.css'
})
export class ManagerDashboardComponent implements OnInit {


  
  totalMotorbikes: number = 0;
  activeRentals: number = 0;
  monthlyRevenue: number = 0;
  motorbikes = [];
  activeRentalsList:Rental[] = [];
  bikeCounts:number=0
  userList: number = 0;
  customerUserList: User[] = [];
  constructor(private bikeService: BikeService,private rentalService:RentalService) {}

  ngOnInit(): void {
   this.bikeService.getbikeCount().subscribe(data=>{
    this.bikeCounts=data
   });
   this.rentalService.getAllRentalRecords().subscribe(data=>{
    this.activeRentalsList=data
    this.activeRentals=data.length
   });
   this.rentalService.getAllUserList().subscribe(data=>{
    this.userList=data
   }

   )
   
  }

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
