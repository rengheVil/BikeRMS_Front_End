import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from "../../services/bike.service";
import { RentalService } from "../../services/rental.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private bikeService: BikeService, private rentalService: RentalService, private toastr: ToastrService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nic: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.rentalService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.message = response.Message;
          this.toastr.success(this.message || 'Registration successful!', 'Success');
        },
        error: (err) => {
          this.message = err.error || 'Registration failed';
          this.toastr.error(this.message, 'Error');
        },
      });
    } else {
      this.message = 'Please fill in all required fields.';
      this.toastr.warning(this.message, 'Form Incomplete');
    }
  }

  
}