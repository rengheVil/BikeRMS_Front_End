import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BikeService } from '../../services/bike.service';
import { RentalService } from "../../services/rental.service";
import { Router } from '@angular/router';
import { log } from 'console';
import { decode } from 'punycode';
import { jwtDecode } from 'jwt-decode';


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
          const decoded:DecodedToken = jwtDecode(response.token);
          console.log(decoded);
          // localStorage.setItem('token', response.token); 
          // localStorage.setItem('role', response.role);  
          // localStorage.setItem('username', response.username);
          let user = JSON.parse(JSON.stringify(decoded));
           localStorage.setItem('userId', user.Id)
          localStorage.setItem("token", JSON.stringify(response.token))
          // localStorage.setItem("user" , J)
        
          // Navigate to role-specific dashboard
          if (decoded.Role=='admin') {
           
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

export interface DecodedToken {
  userId: string; 
  email?: string;
  username?: string; 
  roles?: string[]; 
  Role:string;
  iat: number; 
  exp: number; 
  [key: string]: any; // Additional 
}

