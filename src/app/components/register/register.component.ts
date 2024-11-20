import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from "../../services/bike.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private bikeService: BikeService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      nic: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.bikeService.register(this.registerForm.value).subscribe({
        next: (response) => {
          this.message = response.Message;
        },
        error: (err) => {
          this.message = err.error || 'Registration failed';
        },
      });
    } else {
      this.message = 'Please fill in all required fields.';
    }
  }
}