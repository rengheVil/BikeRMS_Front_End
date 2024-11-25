import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Bike } from '../Models/Bike';
import { User } from '../Models/User';


@Injectable({
  providedIn: 'root'
})

export class RentalService {

  constructor(private http : HttpClient) { }

  private apiUrl =     'https://localhost:7178/api/Motorbike';
  private apiUrlCus =  'https://localhost:7178/api/User';
  private apirequest =     'https://localhost:7178/api/RentalRequest';
  private apirental =  'https://localhost:7178/api/Rental';


    // register 
    register(user: User): Observable<any> {
      console.log(user)
      return this.http.post(`${this.apiUrlCus}/register`, user);
    }

    // Login
    login(credentials: any): Observable<any> {
      return this.http.post(`${this.apiUrlCus}/login`, credentials);
    }

    getCustomers(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrlCus);
    }

       // Update a Customer
       updateCustomer(id: string, data: any): Observable<any> {
        return this.http.put(`${this.apiUrlCus}/${id}`, data);
      }
  
      // Delete a Customer
      deleteCustomer(id: string): Observable<any> {
        return this.http.delete(`${this.apiUrlCus}/${id}`);
      }

   // Get all rentals
    getRentals(): Observable<any[]> {
      return this.http.get<any[]>(this.apirental);
    }

    getRentalRequests(): Observable<any[]> {
      return this.http.get<any[]>(this.apirequest);
    }
    // getRentalRequests(): Observable<any> {
    //   return this.http.get(this.apirequest);
    // }
  
    //mrentalRequests
    updateRequestStatus(id: number, status: string): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, { status });
    }

    requestRental(motorbikeId: number, userId: number, requestDate:Date): Observable<any> {
      return this.http.post(`${this.apirequest}`, {
        MotorbikeId: motorbikeId,
        UserId: userId,
        RequestDate: requestDate

      });
    }

    returnRental(rentalId: number): Observable<any> {
      return this.http.post(`${this.apiUrl}/return`, { RentalId: rentalId });
    }

    //man order history
    getOrderHistory(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
    
}

//customer available Motorbikes
// getMotorbikes(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

//customer my rentals
// getRentals(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }






