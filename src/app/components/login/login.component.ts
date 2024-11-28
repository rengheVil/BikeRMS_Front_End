import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';
import { RentalService } from "../../services/rental.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  message: string = '';

  constructor(private fb: FormBuilder, private bikeService: BikeService, private rentalService: RentalService , private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.rentalService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // localStorage.setItem('token', response.token); 
          // localStorage.setItem('role', response.role);  
          // localStorage.setItem('username', response.username);
          // localStorage.setItem('userId', response.UserId)
          localStorage.setItem("user", JSON.stringify(response))
          // localStorage.setItem("user" , J)
        
          // Navigate to role-specific dashboard
          if (response.role == 'admin' ) {
            this.router.navigate(['/Manager']);
          } 
          // else if (response.Role == 'user' )  {
            
          // }
          else {
            this.router.navigate(['/Customer']);
          }

        },
        error: (err) => {
          this.message = err.error || 'Login failed';
        },
      });
    } else {
      this.message = 'Please fill in all required fields.';
    }
  }
}


