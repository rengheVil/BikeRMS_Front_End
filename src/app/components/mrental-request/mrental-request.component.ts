import { Component , OnInit} from '@angular/core';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { Bike } from '../../Models/Bike';
import { ToastrService } from 'ngx-toastr';
import { EmailTemplate, emailType } from '../../Models/EmailTemplete';
import { EmailService } from '../../services/email.service';



@Component({
  selector: 'app-mrental-request',
  templateUrl: './mrental-request.component.html',
  styleUrl: './mrental-request.component.css'
})
export class MrentalRequestComponent implements OnInit{

  rentalRequests: any[] = [];
  
  motorbikes: any[] = [];  requestDate:any[] =[];

  constructor(private bikeService: BikeService, private rentalService: RentalService , private toastr: ToastrService,private emailService:EmailService) {}

  // ngOnInit(): void {
  //   this.loadRentalRequests();
  // }

  // loadRentalRequests(): void {
  //   this.rentalService.getRentalRequests().subscribe((data) => {
  //     this.rentalRequests = data;
  //   });
  // }
  ngOnInit(): void {
    this.loadRentalRequests();
  }

  approveRequest(id: number): void {
    console.log(id)
    this.rentalService.updateRequestStatus(id).subscribe(data =>{
      console.log(data);
      this.toastr.success('Approved Successfully!');
      alert('Sure to approve')
      this.loadRentalRequests()
    })
  }

  rejectRequest(id: number):void{
    this.rentalService.rejectRentalRequest(id).subscribe({
      next:(response:any) =>{
      },
      complete:() => {
        this.loadRentalRequests();
        this.toastr.success('Rejected Successfully!');
      },
      error:()=>{
        console.log('Failed this action');
      }
    })
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

  sendEmail(email: string,name: string){
    console.log(email);
    console.log(name);
    const emailPayload: EmailTemplate = {
      name: name,
      email: email,
      emailType: emailType.Accept, // Enum value for 'Accept'
    };
    console.log(emailPayload);
    this.emailService.SendMAil(emailPayload).subscribe(
      response => {
        this.toastr.success('Email sent successfully:', response);
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }
}
