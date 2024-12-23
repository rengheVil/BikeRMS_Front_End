import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Bike } from '../../Models/Bike';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-mrental-request',
  templateUrl: './mrental-request.component.html',
  styleUrl: './mrental-request.component.css'
})
export class MrentalRequestComponent implements OnInit{

  rentalRequests: any[] = [];
  
  motorbikes: any[] = [];  requestDate:any[] =[];

  constructor(private bikeService: BikeService, private rentalService: RentalService , private toastr: ToastrService) {}

  // ngOnInit(): void {
  //   this.loadRentalRequests();
  // }

  // loadRentalRequests(): void {
  //   this.rentalService.getRentalRequests().subscribe((data) => {
  //     this.rentalRequests = data;
  //   });
  // }

  approveRequest(id: number): void {
    console.log(id)
    this.rentalService.updateRequestStatus(id).subscribe(data =>{
      console.log(data);
      this.toastr.success('Approved Successfully!');
      alert('Sure to approve')
      this.loadRentalRequests()
    })
  }


  ngOnInit(): void {
    this.loadRentalRequests();
  }

  loadRentalRequests() {
    this.rentalService.getRentalRequests().subscribe(
      (data) => {
        console.log(data)
        this.rentalRequests = data;
        
      },
      (error) => {
        console.error('Error fetching rental requests:', error);
      }
    );
    // this.bikeService.getMotorbikes().subscribe(
    //   (data) => (this.motorbikes = data , console.log(data)),
    //  );  
  }


}
