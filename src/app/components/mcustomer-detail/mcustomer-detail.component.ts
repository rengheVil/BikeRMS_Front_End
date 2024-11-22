
import { Component ,OnInit} from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { RentalService } from "../../services/rental.service";
import { Route } from '@angular/router';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Bike } from '../../Models/Bike';


@Component({
  selector: 'app-mcustomer-detail',
  templateUrl: './mcustomer-detail.component.html',
  styleUrl: './mcustomer-detail.component.css'
})
export class McustomerDetailComponent implements OnInit {


  customers: any[] = [];
  selected!: number;

  constructor(private fb: FormBuilder, private bikeService: BikeService, private rentalService: RentalService) {

  }

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.rentalService.getCustomers().subscribe(
      (data) => (this.customers = data , console.log(data)),
      (error) => console.error(error)
    );
  }

  onUpdate(customer: any): void {
    const updatedCustomer = { ...customer, brand: 'Updated Brand' };
    this.rentalService.updateCustomer(customer.id, updatedCustomer).subscribe(
      (response) => {
        console.log('Updated:', response);
        this.loadCustomers();
      },
      (error) => console.error(error)
    );
  }



  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this motorbike?')) {
      this.rentalService.deleteCustomer(id).subscribe(
        () => this.loadCustomers(),
        (error) => console.error(error)
      );
    }
  }
}
