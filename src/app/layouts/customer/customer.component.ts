import { Component } from '@angular/core';
import { RentalService } from "../../services/rental.service";
import {  } from "module";


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  logout() {
    alert('You have logged out!');
    // Add actual logout functionality here
  }
}
