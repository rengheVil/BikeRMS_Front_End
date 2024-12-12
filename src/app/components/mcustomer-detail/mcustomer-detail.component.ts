
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


  motorbikes: any[] = [];
  selected!: number;
  filteredMotorbikes: any[] = [];
  searchTerm: string = '';
  customers: any[] = [];
  filtered : any[] = [];


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


  filterCustomer(): any {
    console.log(this.searchTerm);
    this.filtered == this.customers;
    console.log(this.searchTerm , this.searchTerm == '');
     console.log(this.filtered);
    console.log(this.customers);
    
      const term = this.searchTerm.toLowerCase();
      console.log(term);
      this.customers = this.customers.filter(customer =>
        customer.id.toString().includes(term) ||
       customer.userName.toLowerCase().includes(term) 
      );
      return this.customers;
    
   
  }
  
}
