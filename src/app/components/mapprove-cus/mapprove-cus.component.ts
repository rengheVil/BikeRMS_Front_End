import { Component , OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Bike } from '../../Models/Bike';
import { ToastrService } from 'ngx-toastr'; 



@Component({
  selector: 'app-mapprove-cus',
  templateUrl: './mapprove-cus.component.html',
  styleUrl: './mapprove-cus.component.css'
})
export class MapproveCusComponent implements OnInit {




  rentalRequests: any[] = [];
  
  motorbikes: any[] = [];  requestDate:any[] =[];

  constructor(private bikeService: BikeService, private rentalService: RentalService , private toastr: ToastrService) {}



  // sendEmail(request: any): void {
  //   const emailData = {
  //     to: request.email, 
  //     subject: 'Your Rental Request Approved',
  //     message: `Dear ${request.userId},/n/nYour rental request for ${request.motorbike.brand} (${request.motorbike.model}) has been approved./n/nThank you!`,
  //   };

  //   this.bikeService.sendEmail(emailData).subscribe(
  //     (response) => {
  //       console.log('Email sent successfully:', response);
  //       alert('Email sent successfully!');
  //     },
  //     (error) => {
  //       console.error('Error sending email:', error);
  //       alert('Failed to send email. Please try again.');
  //     }
  //   );
  // }




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
  
  }


    // approveRequest(id: number): void {
  //   console.log(id)
  //   this.rentalService.updateRequestStatus(id).subscribe(data =>{
  //     console.log(data);
  //     this.toastr.success('Approved Successfully!');
  //     alert('Sure to approve')
  //     this.loadRentalRequests()
  //   })
  // }

}

  // ngOnInit(): void {
  //   this.loadRentalRequests();
  // }

  // loadRentalRequests(): void {
  //   this.rentalService.getRentalRequests().subscribe((data) => {
  //     this.rentalRequests = data;
  //   });
  // }

  
  

  // ngOnInit(): void {
  //   this.getRentalRequests();
  // }

  // getRentalRequests(): void {
  //   this.bikeService.getRequestById().subscribe(
  //     (data: any) => {
  //       this.rentalRequests = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching rental requests:', error);
  //     }
  //   );
  // }

    // this.bikeService.getMotorbikes().subscribe(
    //   (data) => (this.motorbikes = data , console.log(data)),
    //  );  