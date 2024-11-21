import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Bike } from '../Models/Bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http : HttpClient) { }

  createbike(bike :Bike){
    return this.http.post("https://localhost:7178/api/Motorbike" , bike)
  }

  private apiUrl = 'https://localhost:7178/api/Motorbike';

  // register 
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
  

  // Fetch all motorbikes
  getMotorbikes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Update a motorbike
  updateMotorbike(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  // Delete a motorbike
  deleteMotorbike(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

    // Get all rentals
    getRentals(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

    getRentalRequests(): Observable<any> {
      return this.http.get(this.apiUrl);
    }
  
    //mrentalRequests
    updateRequestStatus(id: number, status: string): Observable<any> {
      return this.http.put(`${this.apiUrl}/${id}`, { status });
    }

//customer available Motorbikes
// getMotorbikes(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

requestRental(motorbikeId: number, customer: string): Observable<any> {
  return this.http.post(`${this.apiUrl}/rental-request`, {
    MotorbikeId: motorbikeId,
    Customer: customer,
  });
}

//customer my rentals
// getRentals(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

returnRental(rentalId: number): Observable<any> {
  return this.http.post(`${this.apiUrl}/return`, { RentalId: rentalId });
}

// getRentalRequests(): Observable<any> {
//   return this.http.get(this.apiUrl);
// }

//man order history
getOrderHistory(): Observable<any> {
  return this.http.get(this.apiUrl);
}


// getOrderHistory(): Observable<any[]> {
//   return this.http.get<any[]>(this.apiUrl);
// }

}
